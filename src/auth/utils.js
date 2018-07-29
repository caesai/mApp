import * as exonumClient from 'exonum-client';
import secp256k1 from 'secp256k1';
import { Buffer } from 'safe-buffer';
import bip39 from 'bip39';

export const generateKeyPair = () => exonumClient.keyPair();

export const getPrivateKeyFromSecret = secret => secret.slice(64);

export const sign = (password, key) => secp256k1.sign(password, key);

export const passwordToSignableBuffer = (password) => {
  const letters = password.split().map(passwordItem => passwordItem.charCodeAt());
  letters.length = 32;

  return Buffer.from(letters);
};

export const restoreKey = (mnemonic) => {
  const keyHex = bip39.mnemonicToEntropy(mnemonic);
  const key = Buffer.from(keyHex, 'hex');
  const pubKey = secp256k1.publicKeyCreate(key);

  return {
    secretKey: key.toString('hex') + pubKey.toString('hex').substring(0, 64),
    publicKey: pubKey.toString('hex').substring(0, 64),
  };
};
