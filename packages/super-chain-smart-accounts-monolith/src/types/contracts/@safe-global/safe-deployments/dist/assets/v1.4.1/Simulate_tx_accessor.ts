/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface Simulate_tx_accessorInterface extends Interface {
  getFunction(nameOrSignature: "simulate"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "simulate",
    values: [AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "simulate", data: BytesLike): Result;
}

export interface Simulate_tx_accessor extends BaseContract {
  connect(runner?: ContractRunner | null): Simulate_tx_accessor;
  waitForDeployment(): Promise<this>;

  interface: Simulate_tx_accessorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  simulate: TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish
    ],
    [
      [bigint, boolean, string] & {
        estimate: bigint;
        success: boolean;
        returnData: string;
      }
    ],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "simulate"
  ): TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish
    ],
    [
      [bigint, boolean, string] & {
        estimate: bigint;
        success: boolean;
        returnData: string;
      }
    ],
    "nonpayable"
  >;

  filters: {};
}
