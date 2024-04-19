/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Simulate_tx_accessor,
  Simulate_tx_accessorInterface,
} from "../../../../../../@safe-global/safe-deployments/dist/assets/v1.3.0/Simulate_tx_accessor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "simulate",
    outputs: [
      {
        internalType: "uint256",
        name: "estimate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Simulate_tx_accessor__factory {
  static readonly abi = _abi;
  static createInterface(): Simulate_tx_accessorInterface {
    return new Interface(_abi) as Simulate_tx_accessorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Simulate_tx_accessor {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as Simulate_tx_accessor;
  }
}
