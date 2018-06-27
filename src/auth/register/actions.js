import jshashes from 'jshashes';
import { Buffer } from 'safe-buffer';
import { registerUser } from 'core/api';
import { setUser } from 'auth/actions';
import { generateMnemonic, createAddress } from 'core/crypto/btc';
import { createEthAddress } from 'core/crypto/eth';
import { generatePrivateKey, generatePublicKey, sign, passwordToSignableBuffer } from 'auth/utils';
import { AUTH_CREDENTIALS_SET } from 'auth/constants';

export const generateCredentials = () => async (dispatch) => {
  const privateKey = await generatePrivateKey();
  const publicKey = await generatePublicKey(privateKey);
  const mnemonic = generateMnemonic(privateKey);

  const ethAddress = createEthAddress(privateKey);
  const btcAddress = createAddress(mnemonic);

  dispatch({
    type: AUTH_CREDENTIALS_SET,
    payload: {
      mnemonic,
      publicKey: publicKey.toString('hex'),
      privateKey: privateKey.toString('hex'),
      ethAddress: ethAddress.toString('hex'),
      btcAddress: btcAddress.toString('hex'),
    },
  });
};

export const requestRegisterUser = password => async (dispatch, getState) => {
  const { publicKey, privateKey } = getState().auth.credentials;

  const res = await registerUser({
    uid: Buffer.from(publicKey, 'hex'),
    proof: sign(passwordToSignableBuffer(password), Buffer.from(privateKey, 'hex')),
    credentials: jshashes.SHA256(password),
  });

  dispatch(setUser(res));

  return res;
};

