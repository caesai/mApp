import { registerUser } from 'core/api';
import { setUser } from 'auth/actions';

export const requestRegisterUser = data => async (dispatch) => {
  const res = await registerUser(data);

  dispatch(setUser(res));

  return res;
};

export default {};
