import { connect } from 'react-redux';
import { requestRegisterUser, generateCredentials } from './actions';

const mapDispatch = {
  requestRegisterUser,
  generateCredentials,
};

const mapState = ({ auth }) => ({
  mnemonic: auth.credentials.mnemonic,
});

export default connect(mapState, mapDispatch);
