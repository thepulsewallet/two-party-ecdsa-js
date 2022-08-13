import * as BN from "bn.js";
import { Secp256k1SchnorrProof } from "@safeheron/crypto-zkp";
import { Message1 } from "./message1";
import { Message2 } from "./message2";
import { Message3 } from "./message3";
import { Message4 } from "./message4";
import { KeyShare1 } from "../keyGen";
declare type TCurvePoint = any;
export declare class P1Context {
    private expectedStep;
    keyShare1: KeyShare1;
    k1: BN;
    k1Inv: BN;
    m: TCurvePoint;
    R: TCurvePoint;
    R1: TCurvePoint;
    blind: BN;
    commitment_R1: BN;
    proof_R1: Secp256k1SchnorrProof;
    r: BN;
    s: BN;
    v: number;
    message1: Message1;
    message2: Message2;
    message3: Message3;
    message4: Message4;
    constructor(keyShare1: KeyShare1, k1: BN, R1: TCurvePoint, blind: BN, commitment_R1: BN, proof_R1: Secp256k1SchnorrProof, m: BN);
    static createContext(keyShare1Json: string, m: BN): Promise<P1Context>;
    step1(): Uint8Array;
    step2(message2Bytes: Uint8Array): Uint8Array;
    step3(message4Bytes: Uint8Array): void;
    exportSig(): [BN, BN, number];
}
export {};
