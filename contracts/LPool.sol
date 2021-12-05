//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "./ILPool.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./PoolToken.sol";

// **** There actually needs to be some sort of incentive if I want there to be a main token - whether this be in the form of liquidity tokens for them to redeem rewards from, maybe it will be required for voting ? maybe its value tracks the value of the treasury or the profits generated by the treasury ?
// **** What does AAVE's token actually do ? Maybe I can have it as an airdrop and an aditional minting reward which can be used for voting ?
// **** Perhaps stakers get occasionally rewarded with tokens proportional to the amount they deposited and the amount of time they staked for after a given amount of time
// **** Maybe this is not even necessary at all and it can just be a decentralized lending platform
// **** Maybe we should have our own DAO which is what the tokens can be used for, and some of the liquidity is transferred over to the DAO to be used to back and fund new projects and such

contract LPool is ILPool, Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    mapping(address => address) private assetsPool;
    mapping(address => address) private poolAssets;
    address[] private approvedAssets;

    constructor() {}

    function approveAsset(address _token, string memory _name, string memory _symbol) public onlyOwner {
        require(!isApprovedAsset(_token), "This token has already been approved");
        address newFarmToken = address(new PoolToken(_name, _symbol, 0)); 
        assetsPool[_token] = newFarmToken;
        poolAssets[newFarmToken] = _token;
        approvedAssets.push(_token);
    }

    function isApprovedAsset(address _token) public view returns (bool _isApproved) {
        _isApproved = assetsPool[_token] != address(0);
    }

    function getApprovedAsset(address _token) public view returns (address _approvedAsset) {
        require(isPoolToken(_token), "This asset is not a pool token");
        _approvedAsset = poolAssets[_token];
    }

    function getApprovedAssets() public view returns (address[] memory _approvedAssets) {
        _approvedAssets = approvedAssets;
    }

    function isPoolToken(address _token) public view returns (bool _isPool) {
        _isPool = poolAssets[_token] != address(0);
    }

    function getPoolToken(address _token) public view returns (address _poolToken) {
        require(isApprovedAsset(_token), "This asset is not approved");
        _poolToken = assetsPool[_token];
    }

    function deposit(address _token, uint256 _amount) public {
        // Make sure that the token is approved
        require(isApprovedAsset(_token), "This asset is not approved");
        address _poolToken = getPoolToken(_token);

        // Calculate the compensation tokens
        uint256 numerator = _amount.mul(IERC20(_poolToken).totalSupply());
        uint256 denominator = IERC20(_token).balanceOf(address(this));
        uint256 compensationTokens = numerator.div(denominator);

        // Deposit to the pool and mint new pool tokens
        IERC20(_token).transferFrom(_msgSender(), address(this), _amount);
        PoolToken(_poolToken).mint(_msgSender(), compensationTokens);
        emit Deposit(_msgSender(), _token, _amount, _poolToken, compensationTokens);
    }

    function withdraw(address _token, uint256 _amount) public {
        // Make sure that the token is approved
        require(isPoolToken(_token), "This token is not a pool token");
        address approvedAsset = getApprovedAsset(_token);

        // Calculate the withdraw amount
        uint256 numerator = _amount.mul(IERC20(approvedAsset).totalSupply());
        uint256 denominator = IERC20(_token).totalSupply();
        uint256 withdrawAmount = numerator.div(denominator);

        // Burn the pool tokens and withdraw tokens to the user
        PoolToken(_token).burn(_msgSender(), _amount);
        IERC20(approvedAsset).transfer(_msgSender(), withdrawAmount);
        emit Withdraw(_msgSender(), approvedAsset, withdrawAmount, _token, _amount);
    }
}