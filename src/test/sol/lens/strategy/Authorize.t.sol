//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import {ICheatCodes} from "../../helpers/ICheatCodes.sol";

import {StrategyBase} from "./StrategyBase.sol";
import {Impersonate} from "../../helpers/Impersonate.sol";

import {Config} from "../../helpers/Config.sol";
import {BeefyLPStrategy} from "@contracts/lens/strategy/BeefyLPStrategy.sol";

contract DepositWithdrawTest is StrategyBase, Impersonate {
    using SafeMath for uint256;

    BeefyLPStrategy private strategy;
    address private empty;
    ICheatCodes private cheats;

    function setUp() public override {
        super.setUp();

        strategy = _getStrategy();
        empty = _getEmpty();
        cheats = _getCheats();
    }

    function testFailDeposit() public impersonate(cheats, empty) {
        strategy.deposit(Config.getTokenAmount());
    }

    function testFailDepositAll() public impersonate(cheats, empty) {
        strategy.depositAll();
    }

    function testFailWithdraw() public impersonate(cheats, empty) {
        strategy.withdraw(Config.getTokenAmount());
    }

    function testFailWithdrawAll() public impersonate(cheats, empty) {
        strategy.withdrawAll();
    }

    function testFailUpdateAPY() public impersonate(cheats, empty) {
        strategy.updateAPY(Config.getInitialAPY());
    }
}
