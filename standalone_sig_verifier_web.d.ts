/* tslint:disable */
/* eslint-disable */
/**
 * Verifies a basic (i.e. not a canister signature) IC supported signature.
 * Supported signature schemes: https://internetcomputer.org/docs/current/references/ic-interface-spec/#signatures
 *
 * Throws an error if the signature verification fails.
 */
export function verifyBasicSignature(msg: Uint8Array, signature: Uint8Array, public_key: Uint8Array): void;
/**
 * Verifies an IC canister signature.
 * More details: https://internetcomputer.org/docs/current/references/ic-interface-spec/#canister-signatures
 *
 * Throws an error if the signature verification fails.
 */
export function verifyCanisterSignature(message: Uint8Array, signature: Uint8Array, public_key: Uint8Array, ic_root_public_key: Uint8Array): void;
/**
 * Verifies any IC supported signature.
 * Supported signature schemes: https://internetcomputer.org/docs/current/references/ic-interface-spec/#signatures
 *
 * Throws an error if the signature verification fails.
 */
export function verifyIcSignature(message: Uint8Array, signature: Uint8Array, public_key: Uint8Array, ic_root_public_key: Uint8Array): void;
