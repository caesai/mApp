import { AUTH_USER_SET, AUTH_CREDENTIALS_SET } from './constants';

const INITIAL_STATE = {
  user: null,
  credentials: {
    mnemonic: '',
    publicKey: '',
    privateKey: localStorage.getItem('key'),
    ethAddress: '',
    btcAddress: '',
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        user: payload,
      };
    }
    case AUTH_CREDENTIALS_SET: {
      localStorage.setItem('key', payload.privateKey);
      return {
        ...state,
        credentials: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
