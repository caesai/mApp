import { Buffer } from 'safe-buffer';
import { login } from 'core/api';
import { setUser } from 'auth/actions';
import jshashes from 'jshashes';
import { sign, passwordToSignableBuffer } from 'auth/utils';

export const requestLogin = password => async (dispatch, getState) => {
  const { privateKey } = getState().auth.credentials;

  const res = await login({
    proof: sign(passwordToSignableBuffer(password), Buffer.from(privateKey, 'hex')),
    credentials: jshashes.SHA256(password),
  });

  dispatch(setUser(res));
};

export default {};
