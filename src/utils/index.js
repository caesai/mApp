import axios from 'axios';

const Exonum = require('exonum-client');
const secp256k1 = require('secp256k1');
const bip39 = require('bip39');

export function generatePrivateKey() {
  return Exonum.keyPair();
}

export function createAccount(keyPair, name) {
  const TxSignUp = Exonum.newMessage({
    protocol_version: 0,
    service_id: 128,
    message_id: 2,
    fields: [
      { name: 'pub_key', type: Exonum.PublicKey },
      { name: 'name', type: Exonum.String }
    ]
  });

  const data = {
    pub_key: keyPair.publicKey,
    name: name
  }

  const signature = TxSignUp.sign(keyPair.secretKey, data);
  TxSignUp.signature = signature;

  return axios.post('http://146.185.145.5:9200/api/services/simple_mining_pool/v1/transaction', {
    'protocol_version': 0,
    'service_id': 128,
    'message_id': 2,
    'signature': signature,
    'body': {
      'pub_key': keyPair.publicKey,
      'name': name
    }
  });
}

export function getAccountAccess(keyPair, name) {
  const TxSignIn = Exonum.newMessage({
    protocol_version: 0,
    service_id: 128,
    message_id: 3,
    fields: [
      { name: 'pub_key', type: Exonum.PublicKey },
      { name: 'name', type: Exonum.String }
    ]
  });

  const data = {
    pub_key: keyPair.publicKey,
    name: name
  }

  const signature = TxSignIn.sign(keyPair.secretKey, data);
  TxSignIn.signature = signature;

  return axios.post('http://146.185.145.5:9200/api/services/simple_mining_pool/v1/transaction', {
    'protocol_version': 0,
    'service_id': 128,
    'message_id': 3,
    'signature': signature,
    'body': {
      'pub_key': keyPair.publicKey,
      'name': name
    }
  });
}

export function restoreKey(mnemonic) {
  const keyHex = bip39.mnemonicToEntropy(mnemonic);
  const key = Buffer.from(keyHex, 'hex');
  const pubKey = secp256k1.publicKeyCreate(key);
  const keyPair = {
    privKey: key.toString('hex') + pubKey.toString('hex').substring(0, 64),
    pubKey: pubKey.toString('hex').substring(0, 64)
  }
  return keyPair;
}
