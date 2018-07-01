import React, { Component } from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import Button from 'core/components/Button';

import Typography from 'core/components/Typography';
import connectStore from './connectStore';

const styles = () => ({
  wallets: {
    wordRap: 'break-word',
  },
  formWrap: {
    width: 320,
  },
});

class ProfilePage extends Component {
  componentWillMount() {
    this.props.requestGetProfile();
  }

  handleLogoutClick = () => {
    this.props.logOut();
  };

  render() {
    const { user, classes } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <Typography variant="title">Name: {user.name}</Typography>
        <Typography variant="title">Email: {user.email}</Typography>
        <hr />
        <div className={classes.formWrap}>
          <Typography variant="title">Edit email</Typography>
          <Form>
            <Field name="email" rule="required" />
            <Field name="confirmEmail" label="Confirm email" rule="required" />
          </Form>
          <br />
          <Typography variant="title">Edit password</Typography>
          <Form>
            <Field name="password" rule="required" />
            <Field name="confirmPassword" label="Confirm password" rule="required" />
          </Form>
        </div>
        <hr />
        <br />
        <Typography variant="title">To logout and clear data click the button below</Typography>
        <br />
        <Button variant="raised" color="secondary" onClick={this.handleLogoutClick}>Log out</Button>
      </div>
    );
  }
}

const applyDecorators = compose(
  connectStore,
  withStyles(styles),
);

export default applyDecorators(ProfilePage);
