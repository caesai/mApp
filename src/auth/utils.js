import crypto from 'crypto';
import secp256k1 from 'secp256k1';

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

export const getCharCodes = str => str.split().map(strItem => strItem.charCodeAt());
