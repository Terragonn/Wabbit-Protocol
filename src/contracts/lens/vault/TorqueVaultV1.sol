//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";

import {IVaultV1} from "../../interfaces/lens/vault/IVaultV1.sol";
import {IStrategy} from "../../interfaces/lens/strategy/IStrategy.sol";
import {ISupportsToken} from "../../interfaces/utils/ISupportsToken.sol";
import {SupportsToken} from "../../utils/SupportsToken.sol";
import {Emergency} from "../../utils/Emergency.sol";

contract TorqueVaultV1 is Initializable, AccessControlUpgradeable, ERC20Upgradeable, SupportsToken, IVaultV1, Emergency {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    bytes32 public VAULT_ADMIN_ROLE;
    bytes32 public VAULT_CONTROLLER_ROLE;

    IStrategy public strategy;

    function initialize(IERC20[] memory token) external initializer {
        __ERC20_init("Torque Vault V1", "TVV1");
        __AccessControl_init();
        __SupportsToken_init(token);

        VAULT_ADMIN_ROLE = keccak256("VAULT_ADMIN_ROLE");
        _setRoleAdmin(VAULT_ADMIN_ROLE, VAULT_ADMIN_ROLE);
        _grantRole(VAULT_ADMIN_ROLE, _msgSender());

        VAULT_CONTROLLER_ROLE = keccak256("VAULT_CONTROLLER_ROLE");
        _setRoleAdmin(VAULT_CONTROLLER_ROLE, VAULT_ADMIN_ROLE);
    }

    function setStrategy(IStrategy _strategy) external override onlyRole(VAULT_CONTROLLER_ROLE) {
        strategy = _strategy;
    }

    function _sharesFromAmount(
        IERC20 token,
        uint256 amount,
        uint256 totalShares
    ) private view returns (uint256 shares) {
        uint256 _balance = balance(token);
        if (_balance == 0) shares = amount;
        else shares = amount.mul(totalShares).div(_balance);
    }

    function previewDeposit(uint256[] calldata amount) public view override onlyTokenAmount(amount) returns (uint256 shares) {
        uint256 _totalShares = totalSupply();

        if (_totalShares == 0) {
            shares = amount[0];

            for (uint256 i = 1; i < tokenCount(); i++) {
                uint256 _amount = amount[i];
                if (_amount < shares) shares = _amount;
            }
        } else {
            shares = _sharesFromAmount(tokenByIndex(0), amount[0], _totalShares);

            for (uint256 i = 1; i < tokenCount(); i++) {
                uint256 _shares = _sharesFromAmount(tokenByIndex(i), amount[i], _totalShares);
                if (_shares < shares) shares = _shares;
            }
        }
    }

    function deposit(uint256[] calldata amount) external override onlyTokenAmount(amount) returns (uint256 shares) {
        shares = previewDeposit(amount);

        for (uint256 i = 0; i < tokenCount(); i++) tokenByIndex(i).safeTransferFrom(_msgSender(), address(this), amount[i]);
        _depositAllIntoStrategy();

        _mint(_msgSender(), shares);

        emit Deposit(_msgSender(), amount, shares);
    }

    function previewRedeem(uint256 shares) public view override returns (uint256[] memory amount) {
        uint256 _totalShares = totalSupply();

        amount = new uint256[](tokenCount());
        if (_totalShares == 0) return amount;

        for (uint256 i = 0; i < tokenCount(); i++) {
            uint256 _balance = balance(tokenByIndex(i));
            amount[i] = _balance.mul(shares).div(_totalShares);
        }
    }

    function redeem(uint256 shares) external override returns (uint256[] memory amount) {
        amount = previewRedeem(shares);

        _withdrawAllFromStrategy();

        for (uint256 i = 0; i < tokenCount(); i++) tokenByIndex(i).safeTransfer(_msgSender(), amount[i]);

        _depositAllIntoStrategy();

        _burn(_msgSender(), shares);

        emit Redeem(_msgSender(), shares, amount);
    }

    function balance(IERC20 token) public view override(ISupportsToken, SupportsToken) onlySupportedToken(token) returns (uint256 amount) {
        return token.balanceOf(address(this)).add(strategy.balance(token));
    }

    function _depositAllIntoStrategy() private {
        for (uint256 i = 0; i < tokenCount(); i++) {
            IERC20 token = tokenByIndex(i);
            token.safeApprove(address(strategy), token.balanceOf(address(this)));
        }

        strategy.depositAll();
    }

    function _withdrawAllFromStrategy() private {
        strategy.withdrawAll();
    }

    function inCaseTokensGetStuck(IERC20 token, uint256 amount) public override onlyRole(VAULT_ADMIN_ROLE) {
        super.inCaseTokensGetStuck(token, amount);
    }
}
