import { connect } from 'react-redux';
import { requestLogin } from './actions';

const mapDispatch = {
  requestLogin,
};

const mapState = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapState, mapDispatch);
