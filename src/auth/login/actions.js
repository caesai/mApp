import { login } from 'core/api';
import { setUser } from 'auth/actions';

export const requestLogin = () => async (dispatch) => {
  const res = await login();

  dispatch(setUser(res));
};

export default {};
