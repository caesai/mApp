import { connect } from 'react-redux';
import { requestGetProfile } from './actions';
import { logOut } from '../actions';

const mapDispatch = {
  requestGetProfile,
  logOut,
};

const mapState = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapState, mapDispatch);
