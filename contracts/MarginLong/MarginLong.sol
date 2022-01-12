//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "./MarginLongBorrow.sol";
import "./MarginLongRepay.sol";
import "./MarginLongLiquidate.sol";

contract MarginLong is MarginLongBorrow, MarginLongRepay, MarginLongLiquidate {
    constructor(
        LPool pool_,
        Oracle oracle_,
        FlashSwap flashSwap_,
        uint256 swapToleranceNumerator_,
        uint256 swapToleranceDenominator_,
        uint256 minMarginLevelNumerator_,
        uint256 minMarginLevelDenominator_,
        uint256 minCollateralPrice_,
        uint256 repayTaxNumerator_,
        uint256 repayTaxDenominator_,
        uint256 liquidationFeePercentNumerator_,
        uint256 liquidationFeePercentDenominator_
    )
        MarginCore(pool_, oracle_, flashSwap_, swapToleranceNumerator_, swapToleranceDenominator_)
        MarginLevel(minMarginLevelNumerator_, minMarginLevelDenominator_)
        MarginCollateral(minCollateralPrice_)
        MarginLongRepayCore(repayTaxNumerator_, repayTaxDenominator_)
        MarginLongLiquidate(liquidationFeePercentNumerator_, liquidationFeePercentDenominator_)
    {}
}
