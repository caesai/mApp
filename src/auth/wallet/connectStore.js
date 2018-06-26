import { connect } from 'react-redux';
import { requestGetProfile } from '';

const mapDispatch = {
  getProfile,
};

const mapState = () => ({

});

export default connect(mapState, mapDispatch);
