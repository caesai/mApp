import React, { Component } from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import connectStore from './connectStore';

const styles = () => ({
  wallets: {
    display: 'flex',
  },
});

class ProfilePage extends Component {
  componentWillMount() {
    this.props.requestGetProfile();
  }

  render() {
    const { user, classes } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <Typography>Name: {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <div className={classes.wallets}>
          {
            user.addresses.map(address => (
              <Typography
                variant="title"
                align="center"
                key={address.type}
              >
                {address.type}: {address.value}
              </Typography>
            ))
          }
        </div>
      </div>
    );
  }
}

const applyDecorators = compose(
  connectStore,
  withStyles(styles),
);

export default applyDecorators(ProfilePage);
