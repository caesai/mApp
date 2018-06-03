import { connect } from 'react-redux';
import { requestGetProfile } from './actions';

const mapDispatch = {
  requestGetProfile,
};

const mapState = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapState, mapDispatch);
