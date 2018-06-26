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
        <Typography variant="title">Name: {user.name}</Typography>
        <Typography variant="title">Email: {user.email}</Typography>
        <hr />
        <div className={classes.formWrap}>
          <Typography variant="title">Edit email</Typography>
          <Form>
            <Field name="email" />
            <Field name="confirmEmail" label="Confirm email" />
          </Form>
          <br />
          <Typography variant="title">Edit password</Typography>
          <Form>
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
