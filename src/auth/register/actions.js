import { Buffer } from 'safe-buffer';
import { registerUser } from 'core/api';
import { setUser } from 'auth/actions';
import { generateMnemonic, createAddress } from 'core/crypto/btc';
import { createEthAddress } from 'core/crypto/eth';
import {
  generateKeyPair,
  getPrivateKeyFromSecret,
} from 'auth/utils';
import { AUTH_CREDENTIALS_SET } from 'auth/constants';

export const generateCredentials = () => async (dispatch) => {
  const { publicKey, secretKey } = generateKeyPair();
  const privateKey = getPrivateKeyFromSecret(secretKey);
  const mnemonic = generateMnemonic(privateKey);

  const ethAddress = createEthAddress(Buffer.from(privateKey.slice(32)));
  const btcAddress = createAddress(mnemonic);

  dispatch({
    type: AUTH_CREDENTIALS_SET,
    payload: {
      mnemonic,
      publicKey,
      privateKey,
      secretKey,
      ethAddress: ethAddress.toString('hex'),
      btcAddress: btcAddress.toString('hex'),
    },
  });
};

export const requestRegisterUser = data => async (dispatch) => {
  const res = await registerUser(data);

  dispatch(setUser(res));

  return res;
};
