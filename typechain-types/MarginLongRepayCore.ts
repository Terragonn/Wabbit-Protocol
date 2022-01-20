/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarginLongRepayCoreInterface extends utils.Interface {
  contractName: "MarginLongRepayCore";
  functions: {
    "addCollateral(address,uint256)": FunctionFragment;
    "borrowed(address,address)": FunctionFragment;
    "borrowedPrice(address)": FunctionFragment;
    "collateral(address,address)": FunctionFragment;
    "collateralPrice(address)": FunctionFragment;
    "getBorrowingAccounts()": FunctionFragment;
    "initialBorrowBlock(address,address)": FunctionFragment;
    "initialBorrowPrice(address,address)": FunctionFragment;
    "interest(address)": FunctionFragment;
    "isApprovedBorrowed(address)": FunctionFragment;
    "isApprovedCollateral(address)": FunctionFragment;
    "isBorrowing(address,address)": FunctionFragment;
    "liquidatable(address)": FunctionFragment;
    "liquidationFeePercent()": FunctionFragment;
    "marginLevel(address)": FunctionFragment;
    "maxLeverage()": FunctionFragment;
    "maxLeverageReached(address)": FunctionFragment;
    "minCollateralPrice()": FunctionFragment;
    "minMarginLevel()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "pool()": FunctionFragment;
    "removeCollateral(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resettable(address)": FunctionFragment;
    "setApprovedBorrowed(address[],bool[])": FunctionFragment;
    "setApprovedCollateral(address[],bool[])": FunctionFragment;
    "setMaxLeverage(uint256)": FunctionFragment;
    "setMinCollateralPrice(uint256)": FunctionFragment;
    "setMinMarginLevel(uint256,uint256)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setPool(address)": FunctionFragment;
    "sufficientCollateralPrice(address)": FunctionFragment;
    "totalBorrowed(address)": FunctionFragment;
    "totalCollateral(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCollateral",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowedPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateral",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowingAccounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialBorrowBlock",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialBorrowPrice",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "interest", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedBorrowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBorrowing",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "marginLevel", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maxLeverage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLeverageReached",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "minCollateralPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minMarginLevel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeCollateral",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resettable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setApprovedBorrowed",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedCollateral",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxLeverage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinCollateralPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinMarginLevel",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "setPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sufficientCollateralPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowingAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialBorrowBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialBorrowPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "interest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverageReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minMarginLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resettable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinMarginLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sufficientCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddCollateral(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveCollateral(address,address,uint256)": EventFragment;
    "Repay(address,address)": EventFragment;
    "RepayAll(address)": EventFragment;
    "Reset(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reset"): EventFragment;
}

export type AddCollateralEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; collateral: string; amount: BigNumber }
>;

export type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RemoveCollateralEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; collateral: string; amount: BigNumber }
>;

export type RemoveCollateralEventFilter =
  TypedEventFilter<RemoveCollateralEvent>;

export type RepayEvent = TypedEvent<
  [string, string],
  { account: string; borrowed: string }
>;

export type RepayEventFilter = TypedEventFilter<RepayEvent>;

export type RepayAllEvent = TypedEvent<[string], { account: string }>;

export type RepayAllEventFilter = TypedEventFilter<RepayAllEvent>;

export type ResetEvent = TypedEvent<
  [string, string],
  { account: string; resetter: string }
>;

export type ResetEventFilter = TypedEventFilter<ResetEvent>;

export interface MarginLongRepayCore extends BaseContract {
  contractName: "MarginLongRepayCore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarginLongRepayCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowed(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateral(
      collateral_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBorrowingAccounts(overrides?: CallOverrides): Promise<[string[]]>;

    initialBorrowBlock(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "initialBorrowPrice(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "interest(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isApprovedBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isApprovedCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBorrowing(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidatable(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidationFeePercent(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    marginLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    maxLeverage(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minCollateralPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    minMarginLevel(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    removeCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resettable(account_: string, overrides?: CallOverrides): Promise<[boolean]>;

    setApprovedBorrowed(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedCollateral(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinMarginLevel(
      minMarginLevelNumerator_: BigNumberish,
      minMarginLevelDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalBorrowed(
      borrowed_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalCollateral(
      collateral_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCollateral(
    collateral_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowed(
    borrowed_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowedPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateral(
    collateral_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBorrowingAccounts(overrides?: CallOverrides): Promise<string[]>;

  initialBorrowBlock(
    borrowed_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "initialBorrowPrice(address,address)"(
    borrowed_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "initialBorrowPrice(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "interest(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "interest(address,address)"(
    borrowed_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedBorrowed(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedCollateral(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isBorrowing(address,address)"(
    borrowed_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isBorrowing(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidatable(account_: string, overrides?: CallOverrides): Promise<boolean>;

  liquidationFeePercent(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  marginLevel(
    account_: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

  maxLeverageReached(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

  minMarginLevel(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  removeCollateral(
    collateral_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resettable(account_: string, overrides?: CallOverrides): Promise<boolean>;

  setApprovedBorrowed(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedCollateral(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverage(
    maxLeverage_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinCollateralPrice(
    minCollateralPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinMarginLevel(
    minMarginLevelNumerator_: BigNumberish,
    minMarginLevelDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPool(
    pool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sufficientCollateralPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalBorrowed(
    borrowed_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalCollateral(
    collateral_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowed(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateral(
      collateral_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowingAccounts(overrides?: CallOverrides): Promise<string[]>;

    initialBorrowBlock(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isApprovedCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBorrowing(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidatable(account_: string, overrides?: CallOverrides): Promise<boolean>;

    liquidationFeePercent(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    marginLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

    minMarginLevel(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    removeCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resettable(account_: string, overrides?: CallOverrides): Promise<boolean>;

    setApprovedBorrowed(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovedCollateral(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinMarginLevel(
      minMarginLevelNumerator_: BigNumberish,
      minMarginLevelDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setPool(pool_: string, overrides?: CallOverrides): Promise<void>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalBorrowed(
      borrowed_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalCollateral(
      collateral_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddCollateral(address,address,uint256)"(
      account?: string | null,
      collateral?: null,
      amount?: null
    ): AddCollateralEventFilter;
    AddCollateral(
      account?: string | null,
      collateral?: null,
      amount?: null
    ): AddCollateralEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RemoveCollateral(address,address,uint256)"(
      account?: string | null,
      collateral?: null,
      amount?: null
    ): RemoveCollateralEventFilter;
    RemoveCollateral(
      account?: string | null,
      collateral?: null,
      amount?: null
    ): RemoveCollateralEventFilter;

    "Repay(address,address)"(
      account?: string | null,
      borrowed?: null
    ): RepayEventFilter;
    Repay(account?: string | null, borrowed?: null): RepayEventFilter;

    "RepayAll(address)"(account?: string | null): RepayAllEventFilter;
    RepayAll(account?: string | null): RepayAllEventFilter;

    "Reset(address,address)"(
      account?: string | null,
      resetter?: null
    ): ResetEventFilter;
    Reset(account?: string | null, resetter?: null): ResetEventFilter;
  };

  estimateGas: {
    addCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowed(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateral(
      collateral_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowingAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    initialBorrowBlock(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBorrowing(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidatable(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidationFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    marginLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

    minMarginLevel(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    removeCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resettable(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setApprovedBorrowed(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedCollateral(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinMarginLevel(
      minMarginLevelNumerator_: BigNumberish,
      minMarginLevelDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(
      borrowed_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalCollateral(
      collateral_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowed(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateral(
      collateral_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowingAccounts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialBorrowBlock(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initialBorrowPrice(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "interest(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBorrowing(address,address)"(
      borrowed_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidatable(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationFeePercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marginLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLeverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minCollateralPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minMarginLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCollateral(
      collateral_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resettable(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovedBorrowed(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedCollateral(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinMarginLevel(
      minMarginLevelNumerator_: BigNumberish,
      minMarginLevelDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowed(
      borrowed_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalCollateral(
      collateral_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}