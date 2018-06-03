import { AUTH_USER_SET } from './constants';

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
