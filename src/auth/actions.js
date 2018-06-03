import { AUTH_USER_SET } from 'auth/constants';

export const setUser = user => ({
  type: AUTH_USER_SET,
  payload: user,
});

export default {};
