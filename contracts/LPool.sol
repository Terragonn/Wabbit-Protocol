//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./lib/LPoolCore.sol";
import "./Margin.sol";

contract LPool is LPoolCore {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    mapping(uint256 => mapping(IERC20 => StakingPeriod)) private StakingPeriods; // Period Id => token => staking period

    uint256 public taxPercent;
    address public taxAccount;

    constructor(uint256 periodLength_, uint256 cooldownLength_, uint256 taxPercent_) LPoolCore(periodLength_, cooldownLength_) {
        _setRoleAdmin(POOL_APPROVED, POOL_ADMIN);
        _grantRole(POOL_ADMIN, _msgSender());

        taxPercent = taxPercent_;
        taxAccount = _msgSender();
    }

    // ======== Tax ========

    /** @dev Set the tax percentage */
    function setTaxPercentage(uint256 _taxPercent) external onlyRole(POOL_ADMIN) {
        taxPercent = _taxPercent;
    }

    /** @dev Set the tax account */
    function setTaxAccount(address _account) external onlyRole(POOL_ADMIN) {
        taxAccount = _account;
    }

    // ======== Balance management ========

    /** @dev Returns the deposited balance of a given account for a given token for a given period */
    function balanceOf(address _account, IERC20 _token, uint256 _periodId) public view returns (uint256) {
        return StakingPeriods[_periodId][_token].deposits[_account];
    }

    /** @dev Returns the value of the tokens for a given period for a given token once they are redeemed */
    function redeemValue(IERC20 _token, uint256 _amount, uint256 _periodId) public view onlyApproved(_token) returns (uint256) {
        StakingPeriod storage period = StakingPeriods[_periodId][_token];
        if (isPrologue(_periodId)) return _amount;
        return _amount.mul(period.liquidity).div(period.totalDeposited);
    }

    // ======== Liquidity manipulation ========

    /** @dev Get the total amount of deposited assets into the given pool */
    function deposited(IERC20 _token, uint256 _periodId) external view returns (uint256) {
        StakingPeriod storage stakingPeriod = StakingPeriods[_periodId][_token];
        return stakingPeriod.totalDeposited;
    }

    // **** Here is the problem with this - we need a TVL and a different liquidity, because now this would be affecting the utilization and interest rates

    /** @dev Returns the total locked liquidity for the current period */
    function liquidity(IERC20 _token, uint256 _periodId) public view returns (uint256) {
        StakingPeriod storage stakingPeriod = StakingPeriods[_periodId][_token];
        if (isCurrentPeriod(_periodId)) return stakingPeriod.liquidity.sub(stakingPeriod.totalClaimed);
        return stakingPeriod.liquidity;
    }

    /** @dev Stakes a given amount of specified tokens in the pool */
    function stake(IERC20 _token, uint256 _amount, uint256 _periodId) external onlyApproved(_token) {
        require(_periodId >= currentPeriodId(), "May only stake into current or future periods");
        require(isPrologue(_periodId) || !isCurrentPeriod(_periodId), "Staking is only allowed during the prologue period or for a future period");

        // Move the tokens to the pool and update the users deposit amount
        _token.safeTransferFrom(_msgSender(), address(this), _amount);

        StakingPeriod storage stakingPeriod = StakingPeriods[_periodId][_token];

        stakingPeriod.deposits[_msgSender()] = stakingPeriod.deposits[_msgSender()].add(_amount);
        stakingPeriod.liquidity = stakingPeriod.liquidity.add(_amount);
        stakingPeriod.totalDeposited = stakingPeriod.totalDeposited.add(_amount);

        emit Stake(_msgSender(), _periodId, _token, _amount);
    }

    /** @dev Redeems the staked amount of tokens in a given pool */
    function redeem(IERC20 _token, uint256 _amount, uint256 _periodId) external {
        require(isPrologue(_periodId) || !isCurrentPeriod(_periodId), "Redeem is only allowed during prologue period or once period has ended");
        require(_amount <= balanceOf(_msgSender(), _token, _periodId), "Cannot redeem more than total balance");

        // Update the balances of the period, withdraw collateral and return to user
        StakingPeriod storage stakingPeriod = StakingPeriods[_periodId][_token];

        uint256 tokensRedeemed = redeemValue(_token, _amount, _periodId);

        stakingPeriod.deposits[_msgSender()] = stakingPeriod.deposits[_msgSender()].sub(_amount);
        stakingPeriod.totalDeposited = stakingPeriod.totalDeposited.sub(_amount);

        stakingPeriod.liquidity = stakingPeriod.liquidity.sub(tokensRedeemed);
        _token.safeTransfer(_msgSender(), tokensRedeemed);

        emit Redeem(_msgSender(), _periodId, _token, _amount, tokensRedeemed);
    }

    /** @dev Allow an approved user to claim liquidity as their own without removing liquidity from the pool */
    function claim(IERC20 _token, uint256 _amount) external onlyRole(POOL_APPROVED) onlyApproved(_token) {
        uint256 periodId = currentPeriodId();
        require(!isPrologue(periodId), "Cannot claim during prologue");
        require(_amount <= liquidity(_token, periodId), "Cannot claim more than total liquidity");

        StakingPeriod storage stakingPeriod = StakingPeriods[periodId][_token];
        stakingPeriod.totalClaimed = stakingPeriod.totalClaimed.add(_amount);
        stakingPeriod.claims[_msgSender()] = stakingPeriod.claims[_msgSender()].add(_amount);

        emit Claim(_msgSender(), periodId, _token, _amount);
    }

    /** @dev Allow an approved user to unclaim liquidity */
    function unclaim(IERC20 _token, uint256 _amount) external onlyRole(POOL_APPROVED) onlyApproved(_token) {
        uint256 periodId = currentPeriodId();
        require(!isPrologue(periodId), "Cannot unclaim during prologue");

        StakingPeriod storage stakingPeriod = StakingPeriods[periodId][_token];

        require(_amount <= stakingPeriod.claims[_msgSender()], "Cannot unclaim more than what has been claimed");

        stakingPeriod.totalClaimed = stakingPeriod.totalClaimed.sub(_amount);
        stakingPeriod.claims[_msgSender()] = stakingPeriod.claims[_msgSender()].sub(_amount);

        emit Unclaim(_msgSender(), periodId, _token, _amount);
    }

    /** @dev Deposit tokens into the pool and increase the liquidity of the pool */
    function deposit(IERC20 _token, uint256 _amount) external onlyRole(POOL_APPROVED) onlyApproved(_token) {
        uint256 periodId = currentPeriodId();

        // Pay a tax to the contract owner
        uint256 amount = _amount;
        {
            uint256 tax = _amount.mul(taxPercent).div(100);
            amount = amount.sub(tax);
            _token.safeTransferFrom(_msgSender(), taxAccount, tax);
        }

        _token.safeTransferFrom(_msgSender(), address(this), amount);
        StakingPeriods[periodId][_token].liquidity = StakingPeriods[periodId][_token].liquidity.add(amount);

        emit Deposit(_msgSender(), periodId, _token, amount);
    }

    /** @dev Withdraw tokens from the pool and decrease the liquidity of the pool */
    function withdraw(IERC20 _token, uint256 _amount) external onlyRole(POOL_APPROVED) onlyApproved(_token) {
        uint256 periodId = currentPeriodId();
        require(!isPrologue(periodId), "Cannot withdraw during prologue");
        require(_amount <= liquidity(_token, periodId), "Cannot withdraw more than what is in pool");

        // Withdraw an amount from the current pool
        StakingPeriod storage stakingPeriod = StakingPeriods[periodId][_token]; 

        stakingPeriod.liquidity = stakingPeriod.liquidity.sub(_amount);
        _token.safeTransfer(_msgSender(), _amount);

        emit Withdraw(_msgSender(), periodId, _token, _amount);
    }

    // ======== Events ========

    event Stake(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount);
    event Redeem(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount, uint256 liquidity);

    event Claim(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount);
    event Unclaim(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount);

    event Deposit(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount);
    event Withdraw(address indexed account, uint256 indexed periodId, IERC20 token, uint256 amount);
}