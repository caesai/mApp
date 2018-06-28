import { connect } from 'react-redux';
import { requestLogin } from './actions';

export const connectLogin = () => {
  const mapDispatch = {
    requestLogin,
  };

  const mapState = ({ auth }) => ({
    user: auth.user,
    privateKey: auth.credentials.privateKey,
  });

  return connect(mapState, mapDispatch);
};

export default {};
