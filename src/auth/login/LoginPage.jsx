import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import TextLink from 'core/components/TextLink';
import { connectLogin } from './connectStore';

const styles = () => ({
  root: {
    margin: '0 auto',
    maxWidth: 320,
  },
  textLink: {
    display: 'block',
  },
});

class LoginPage extends Component {
  handleSubmit = async (data) => {
    const { requestLogin, history } = this.props;

    requestLogin(data);
    history.push('/profile');
  };

  render() {
    const { classes, privateKey } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline">Login</Typography>
        <Form onSubmit={this.handleSubmit} buttonLabel="Login">
          {
            !privateKey && (
              <Field name="mnemonic" rule="required" />
            )
          }
          <Field name="password" rule="required" />
        </Form>
        <TextLink
          className={classes.textLink}
          to="/reset-password"
        >
          Reset password
        </TextLink>
        <TextLink
          className={classes.textLink}
          to="/register"
        >
          Зарегестрируйтесь
        </TextLink>
      </div>
    );
  }
}

const applyDecorators = compose(
  withRouter,
  connectLogin(),
  withStyles(styles),
);

export default applyDecorators(LoginPage);
