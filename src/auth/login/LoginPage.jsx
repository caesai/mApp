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
    margin: '64px auto',
    maxWidth: 320,
  },
});

class LoginPage extends Component {
  handleSubmit = async () => {
    await this.props.requestLogin();
    this.props.history.push('/profile');
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline">Login</Typography>
        <Form onSubmit={this.handleSubmit} buttonLabel="Login">
          <Field name="email" rule="email" />
          <Field name="password" />
        </Form>
        <TextLink to="/register">Зарегестрируйтесь</TextLink>
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
