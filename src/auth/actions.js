import { AUTH_USER_SET, AUTH_LOGOUT } from 'auth/constants';

export const setUser = user => ({
  type: AUTH_USER_SET,
  payload: user,
});

export const logOut = () => ({
  type: AUTH_LOGOUT,
});

