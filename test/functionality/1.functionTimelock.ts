import hre from "hardhat";
import {BigNumber, Contract} from "ethers";
import {getImplementationAddress} from "@openzeppelin/upgrades-core";
import {getUpgradeableBeaconFactory} from "@openzeppelin/hardhat-upgrades/dist/utils";

import {shouldFail} from "../../scripts/utils/misc/utilTest";
import {wait} from "../../scripts/utils/misc/utilTest";
import {Timelock} from "../../typechain-types";
import {chooseConfig} from "../../scripts/utils/config/utilConfig";
import getConfigType from "../../scripts/utils/config/utilConfigTypeSelector";

describe("Functionality: Timelock", () => {
    const configType = getConfigType(hre);
    const config = chooseConfig(configType);

    let timelock: Timelock;
    let minDelay: BigNumber;

    let proxyAdmin: Contract;

    const executeAdminOnly = async ({address, value, calldata, description}: {address: string; value: number; calldata: string; description?: string}) => {
        const parsedPredecessor = hre.ethers.constants.HashZero;
        const parsedDescription = hre.ethers.utils.keccak256(hre.ethers.utils.toUtf8Bytes(description || Date.now().toString()));

        await (await timelock.schedule(address, value, calldata, parsedPredecessor, parsedDescription, minDelay)).wait();

        const execute = async () => await (await timelock.execute(address, value, calldata, parsedPredecessor, parsedDescription)).wait();
        await shouldFail(execute);

        await wait(hre, minDelay);

        await execute();
    };

    before(async () => {
        timelock = await hre.ethers.getContractAt("Timelock", config.contracts.timelockAddress);

        minDelay = await timelock.getMinDelay();

        proxyAdmin = await hre.upgrades.admin.getInstance();
    });

    it("should execute an admin only request to the converter and attempt to upgrade it", async () => {
        const converter = await hre.ethers.getContractAt("Converter", config.contracts.converterAddress);
        await shouldFail(async () => await converter.setRouter(config.setup.converter.routerAddress));

        await executeAdminOnly({
            address: converter.address,
            value: 0,
            calldata: converter.interface.encodeFunctionData("setRouter", [config.setup.converter.routerAddress]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.converterAddress);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.converterAddress, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.converterAddress, implementation]),
        });
    });

    it("should execute an admin only request to the leveraging pool and attempt to upgrade it", async () => {
        const pool = await hre.ethers.getContractAt("LPool", config.contracts.leveragePoolAddress);
        await shouldFail(async () => await pool.setConverter(config.contracts.converterAddress));

        await executeAdminOnly({
            address: pool.address,
            value: 0,
            calldata: pool.interface.encodeFunctionData("setConverter", [config.contracts.converterAddress]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.leveragePoolAddress);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.leveragePoolAddress, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.leveragePoolAddress, implementation]),
        });
    });

    it("should execute an admin only request to the margin long and attempt to upgrade it", async () => {
        const marginLong = await hre.ethers.getContractAt("MarginLong", config.contracts.marginLongAddress);
        await shouldFail(async () => await marginLong.setOracle(config.contracts.oracleAddress));

        await executeAdminOnly({
            address: marginLong.address,
            value: 0,
            calldata: marginLong.interface.encodeFunctionData("setOracle", [config.contracts.oracleAddress]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.marginLongAddress);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.marginLongAddress, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.marginLongAddress, implementation]),
        });
    });

    it("should execute an admin only request to the oracle and attempt to upgrade it", async () => {
        const oracle = await hre.ethers.getContractAt("OracleTest", config.contracts.oracleAddress);
        const token = config.tokens.approved.filter((approved) => approved.setup.oracle)[0];
        await shouldFail(async () => await oracle.setApprovedPriceFeed([token.address], [token.setup.priceFeed], [token.decimals], [true]));

        await executeAdminOnly({
            address: oracle.address,
            value: 0,
            calldata: oracle.interface.encodeFunctionData("setApprovedPriceFeed", [[token.address], [token.setup.priceFeed], [token.decimals], [true]]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.oracleAddress);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.oracleAddress, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.oracleAddress, implementation]),
        });
    });

    // **** Test the LP tokens with the timelock too

    it("should execute an admin only request to the resolver and attempt to upgrade it", async () => {
        const resolver = await hre.ethers.getContractAt("Resolver", config.contracts.resolverAddress);
        await shouldFail(async () => await resolver.setConverter(config.contracts.converterAddress));

        await executeAdminOnly({
            address: resolver.address,
            value: 0,
            calldata: resolver.interface.encodeFunctionData("setConverter", [config.contracts.converterAddress]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.resolverAddress);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.resolverAddress, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.resolverAddress, implementation]),
        });
    });

    it("should execute an admin only request to the flash lender and attempt to upgrade it", async () => {
        const flashLender = await hre.ethers.getContractAt("FlashLender", config.contracts.flashLender);
        await shouldFail(async () => await flashLender.setFeePercent(1, 1000000));

        await executeAdminOnly({
            address: flashLender.address,
            value: 0,
            calldata: flashLender.interface.encodeFunctionData("setFeePercent", [1, 1000000]),
        });

        const implementation = await getImplementationAddress(hre.ethers.provider, config.contracts.flashLender);
        await shouldFail(async () => await proxyAdmin.upgrade(config.contracts.flashLender, implementation));
        await executeAdminOnly({
            address: proxyAdmin.address,
            value: 0,
            calldata: proxyAdmin.interface.encodeFunctionData("upgrade", [config.contracts.flashLender, implementation]),
        });
    });

    it("should execute an admin only request to an LP token and attempt to upgrade it", async () => {
        const poolToken = await hre.ethers.getContractAt("LPoolToken", config.tokens.lpTokens.tokens[0]);

        await shouldFail(async () => await poolToken.pause());
        await executeAdminOnly({
            address: poolToken.address,
            value: 0,
            calldata: poolToken.interface.encodeFunctionData("pause"),
        });
        await executeAdminOnly({
            address: poolToken.address,
            value: 0,
            calldata: poolToken.interface.encodeFunctionData("unpause"),
        });

        const implementation = await hre.upgrades.beacon.getImplementationAddress(config.tokens.lpTokens.beaconAddress);
        const beacon = (await getUpgradeableBeaconFactory(hre, hre.ethers.provider.getSigner())).attach(config.tokens.lpTokens.beaconAddress);
        await shouldFail(async () => await beacon.upgradeTo(implementation));
        await executeAdminOnly({
            address: beacon.address,
            value: 0,
            calldata: beacon.interface.encodeFunctionData("upgradeTo", [implementation]),
        });
    });
});
