import jshashes from 'jshashes';
import { Buffer } from 'safe-buffer';
import { registerUser } from 'core/api';
import { setUser } from 'auth/actions';
import { generateMnemonic, createAddress } from 'core/crypto/btc';
import { createEthAddress } from 'core/crypto/eth';
import { generatePrivateKey, generatePublicKey, sign, getCharCodes } from 'auth/utils';
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
      publicKey,
      privateKey,
      mnemonic,
      ethAddress,
      btcAddress,
    },
  });
};

export const requestRegisterUser = password => async (dispatch, getState) => {
  const { publicKey, privateKey } = getState().auth.credentials;

  const passwordInCodes = getCharCodes(password);
  passwordInCodes.length = 32;

  const res = await registerUser({
    uid: publicKey,
    proof: sign(Buffer.from(passwordInCodes), privateKey),
    credentials: jshashes.SHA256(password),
  });

  dispatch(setUser(res));

  return res;
};

