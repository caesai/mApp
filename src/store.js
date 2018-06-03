import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';

const reducers = combineReducers({
  auth: authReducer,
});

let store;

export const create = () => {
  store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
};

export const getStore = () => store;

