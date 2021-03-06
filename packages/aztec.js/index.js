/* eslint-disable import/no-dynamic-require */
const path = require('path');

const abiEncoder = require(path.join(__dirname, 'lib', 'abiEncoder'));
const bn128 = require(path.join(__dirname, 'lib', 'bn128'));
const keccak = require(path.join(__dirname, 'lib', 'keccak'));
const note = require(path.join(__dirname, 'lib', 'note'));
const params = require(path.join(__dirname, 'lib', 'params'));
const proof = require(path.join(__dirname, 'lib', 'proof'));
const secp256k1 = require(path.join(__dirname, 'lib', 'secp256k1'));
const setup = require(path.join(__dirname, 'lib', 'setup'));
const sign = require(path.join(__dirname, 'lib', 'sign'));

module.exports = {
    abiEncoder,
    bn128,
    keccak,
    note,
    params,
    proof,
    secp256k1,
    setup,
    sign,
};
