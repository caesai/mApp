import React, { Component } from 'react';
import Typography from 'core/components/Typography';

class WalletsPage extends Component {
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
        <br /><br />
      </div>
    );
  }
}

export default WalletsPage;
