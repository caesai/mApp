import { getProfile } from 'core/api';
import { setUser } from 'auth/actions';

export const requestGetProfile = data => async (dispatch) => {
  const res = await getProfile(data);

  dispatch(setUser(res));

  return res;
};

export default {};
