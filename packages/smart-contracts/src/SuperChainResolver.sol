// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {SchemaResolver} from "eas-contracts/resolver/SchemaResolver.sol";
import {IEAS, Attestation} from "eas-contracts/IEAS.sol";
import {SuperChainModule} from "./SuperChainModule.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract SuperChainResolver is SchemaResolver, Ownable {
    SuperChainModule public superChainModule;
    address private immutable _attestator;

    constructor(IEAS eas, address attestator) Ownable(msg.sender) SchemaResolver(eas) {
        _attestator = attestator;
    }

    // This might be onlyOwner
    function updateSuperChainAccountsManager(
        SuperChainModule _SuperChainModule
    ) public onlyOwner {
        superChainModule = _SuperChainModule;
    }

    function onAttest(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        if (attestation.attester != _attestator) {
            return false;
        }
        uint256 points = abi.decode(attestation.data, (uint256));
        superChainModule.incrementSuperChainPoints(
            points,
            attestation.recipient
        );
        return true;
    }

    function onRevoke(
        Attestation calldata,
        /*attestation*/ uint256 /*value*/
    ) internal pure override returns (bool) {
        return true;
    }
}
