import React, { Component } from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import connectStore from './connectStore';

const styles = () => ({

});

class WalletsPage extends Component {
  componentWillMount() {
    this.props.requestGetProfile();
  }

  render() {
    const { classes, user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <Typography variant="title">Wallets</Typography>
        <div className={classes.wallets}>
          {
            user.addresses.map(address => (
              <Typography
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

const connect = compose(
  connectStore,
  withStyles(styles),
);

export default connect(WalletsPage);
