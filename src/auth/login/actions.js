import { Buffer } from 'safe-buffer';
import { login } from 'core/api';
import { setUser } from 'auth/actions';
import jshashes from 'jshashes';
import { sign, passwordToSignableBuffer } from 'auth/utils';
import { recoverPrivateKey } from 'core/crypto/btc';

export const requestLogin = ({ password, mnemonic }) => async (dispatch, getState) => {
  let { privateKey } = getState().auth.credentials;
  if (!privateKey) {
    privateKey = recoverPrivateKey(mnemonic);
  }

  const res = await login({
    proof: sign(passwordToSignableBuffer(password), Buffer.from(privateKey, 'hex')),
    credentials: jshashes.SHA256(password),
  });

  dispatch(setUser(res));
};

export default {};
