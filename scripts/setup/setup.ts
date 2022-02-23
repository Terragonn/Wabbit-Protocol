import {HardhatRuntimeEnvironment} from "hardhat/types";

import {ConfigType} from "../utils/utilConfig";

import setupPool from "./setupPool";
import setupOracle from "./setupOracle";
import setupMarginLong from "./setupMarginLong";
import setupTimelock from "./setupTimelock";
import setupFlashLender from "./setupFlashLender";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    await setupPool(configType, hre);
    await setupFlashLender(configType, hre);
    await setupOracle(configType, hre);
    await setupMarginLong(configType, hre);
    await setupTimelock(configType, hre);
}
