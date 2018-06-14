import { connect } from 'react-redux';
import { cashOut } from './actions';

const mapState = () => ({});

const mapDispatch = {
  cashOut,
};

export default connect(mapState, mapDispatch);
