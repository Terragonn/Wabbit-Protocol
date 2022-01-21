import {HardhatRuntimeEnvironment} from "hardhat/types";
import {chooseConfig, ConfigType, saveConfig} from "../util/utilConfig";
import {saveTempConstructor} from "../util/utilVerify";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const constructorArgs = {
        thresholdNumerator: 1,
        thresholdDenominator: 200,
        priceDecimals: 18,
    };
    const Oracle = await hre.ethers.getContractFactory("Oracle");
    const oracle = await Oracle.deploy(constructorArgs.thresholdNumerator, constructorArgs.thresholdDenominator, constructorArgs.priceDecimals);
    config.oracleAddress = oracle.address;
    console.log("Deployed: Oracle");

    saveTempConstructor(oracle.address, constructorArgs);
    saveConfig(config, configType);
}
