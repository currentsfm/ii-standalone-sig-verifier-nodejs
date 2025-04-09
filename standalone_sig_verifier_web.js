
let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_0.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
/**
 * Verifies a basic (i.e. not a canister signature) IC supported signature.
 * Supported signature schemes: https://internetcomputer.org/docs/current/references/ic-interface-spec/#signatures
 *
 * Throws an error if the signature verification fails.
 * @param {Uint8Array} msg
 * @param {Uint8Array} signature
 * @param {Uint8Array} public_key
 */
module.exports.verifyBasicSignature = function(msg, signature, public_key) {
    const ptr0 = passArray8ToWasm0(msg, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.verifyBasicSignature(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
};

/**
 * Verifies an IC canister signature.
 * More details: https://internetcomputer.org/docs/current/references/ic-interface-spec/#canister-signatures
 *
 * Throws an error if the signature verification fails.
 * @param {Uint8Array} message
 * @param {Uint8Array} signature
 * @param {Uint8Array} public_key
 * @param {Uint8Array} ic_root_public_key
 */
module.exports.verifyCanisterSignature = function(message, signature, public_key, ic_root_public_key) {
    const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(ic_root_public_key, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.verifyCanisterSignature(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
};

/**
 * Verifies any IC supported signature.
 * Supported signature schemes: https://internetcomputer.org/docs/current/references/ic-interface-spec/#signatures
 *
 * Throws an error if the signature verification fails.
 * @param {Uint8Array} message
 * @param {Uint8Array} signature
 * @param {Uint8Array} public_key
 * @param {Uint8Array} ic_root_public_key
 */
module.exports.verifyIcSignature = function(message, signature, public_key, ic_root_public_key) {
    const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(ic_root_public_key, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.verifyIcSignature(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
};

module.exports.__wbindgen_init_externref_table = function() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

const path = require('path').join(__dirname, 'standalone_sig_verifier_web_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

wasm.__wbindgen_start();

