import React, { Component } from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Form from 'core/components/Form';
import Field from 'core/components/Field';

import Typography from 'core/components/Typography';
import connectStore from './connectStore';

const styles = () => ({
  wallets: {
    wordRap: 'break-word',
  },
  formWrap: {
    width: 320,
    margin: '0 auto',
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
        <br />
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
        <div className={classes.formWrap}>
          <Typography variant="title">Edit profile</Typography>
          <Form>
            <Field name="email" />
            <Field name="password" />
            <Field name="confirmPassword" label="Confirm password" />
          </Form>
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
