import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from 'core/components/Typography';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import { login } from 'core/api';

class LoginPage extends Component {
  handleSubmit = async () => {
    await login();

    this.props.history.push('/profile');
  };

  render() {
    return (
      <div>
        <Typography variant="headline">Login</Typography>
        <Form onSubmit={this.handleSubmit} buttonLabel="Login">
          <Field name="email" />
          <Field name="password" />
        </Form>
      </div>
    );
  }
}

export default withRouter(LoginPage);
