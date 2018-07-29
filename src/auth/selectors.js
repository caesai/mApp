import { getStore } from 'store';

export const getCredentials = state => state.auth.credentials;

export const getCredentialFromStore = () => {
  const store = getStore();

  return getCredentials(store.getState());
};

export default {};
