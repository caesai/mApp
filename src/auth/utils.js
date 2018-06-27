import crypto from 'crypto';
import secp256k1 from 'secp256k1';
import { Buffer } from 'safe-buffer';

export const generatePrivateKey = () => (
  new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buf) => {
      if (err) reject(err);
      resolve(buf);
    });
  })
);

export const generatePublicKey = privateKey => secp256k1.publicKeyCreate(privateKey);

export const sign = (password, key) => secp256k1.sign(password, key);

export const passwordToSignableBuffer = (password) => {
  const letters = password.split().map(passwordItem => passwordItem.charCodeAt());
  letters.length = 32;

  return Buffer.from(letters);
};
