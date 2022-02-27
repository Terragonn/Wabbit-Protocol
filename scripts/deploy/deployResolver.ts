import {HardhatRuntimeEnvironment} from "hardhat/types";
import {getImplementationAddress} from "@openzeppelin/upgrades-core";

import {chooseConfig, ConfigType, saveConfig} from "../utils/utilConfig";
import {saveTempConstructor} from "../utils/utilVerify";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const signer = hre.ethers.provider.getSigner();
    const signerAddress = await signer.getAddress();

    const constructorArgs = {
        taskTreasury: config.setup.taskTreasury,
        depositReceiver: signerAddress,
        ethAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        marginLong: "",
        converter: "",
    };
    const Resolver = await hre.ethers.getContractFactory("Resolver");
    const resolver = await hre.upgrades.deployProxy(Resolver, Object.values(constructorArgs));
    await resolver.deployed();

    config.contracts.resolverAddress = resolver.address;
    const implementation = await getImplementationAddress(hre.ethers.provider, resolver.address);
    console.log(`Deployed: Resolver, implementation | ${resolver.address}, ${implementation}`);

    if (configType !== "fork") saveTempConstructor(implementation, {});
    saveConfig(config, configType);
}
