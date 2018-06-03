import { connect } from 'react-redux';

export const connectHeaderLink = () => {
  const mapState = ({ auth }) => ({
    user: auth.user,
  });

  return connect(mapState);
};

export default {};
