//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

import {IStrategyController} from "../../interfaces/lens/strategy-controller/IStrategyController.sol";

import {IVaultV1} from "../../interfaces/lens/vault/IVaultV1.sol";
import {IStrategy} from "../../interfaces/lens/strategy/IStrategy.sol";
import {Registry} from "../../utils/Registry.sol";
import {Emergency} from "../../utils/Emergency.sol";

contract StrategyController is Initializable, AccessControlUpgradeable, IStrategyController, Registry, Emergency {
    IVaultV1 private vault;

    bytes32 public CONTROLLER_ADMIN_ROLE;

    function initialize(IVaultV1 _vault) external initializer {
        __AccessControl_init();
        __Registry_init();
        __Emergency_init();

        CONTROLLER_ADMIN_ROLE = keccak256("CONTROLLER_ADMIN_ROLE");
        _setRoleAdmin(CONTROLLER_ADMIN_ROLE, CONTROLLER_ADMIN_ROLE);
        _grantRole(CONTROLLER_ADMIN_ROLE, _msgSender());

        vault = _vault;
    }

    function isStrategyUpdateable() external view override returns (bool updateable) {}

    function updateStrategy() external override {}

    function isAPYUpdateable() external view override returns (bool updateable) {}

    function updateAPY() external override {}
}
