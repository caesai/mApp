import { connect } from 'react-redux';
import { requestRegisterUser } from './actions';

const mapDispatch = {
  requestRegisterUser,
};

const mapState = () => ({

});

export default connect(mapState, mapDispatch);
