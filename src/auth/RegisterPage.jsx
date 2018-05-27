import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from 'core/components/Typography';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import { generateMnemonic } from 'core/crypto/utils';
import { registerUser } from 'core/api';

class RegisterPage extends Component {
  state = {
    mnemonic: '',
  };

  componentWillMount() {
    this.setState({ mnemonic: generateMnemonic() });
  }

  handleSubmit = async (data) => {
    const {
      mnemonic,
    } = this.state;

    const user = {
      mnemonic,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await registerUser(user);

    this.props.history.push('/profile');
  };

  render() {
    const {
      mnemonic,
    } = this.state;

    return (
      <div>
        <Typography variant="title">Generated mnemonic key</Typography>
        <Typography>{mnemonic}</Typography>
        <Form onSubmit={this.handleSubmit} buttonLabel="Register">
          <Field name="name" rule="alpha" />
          <Field name="email" rule="email" />
          <Field name="password" />
        </Form>
      </div>
    );
  }
}

export default withRouter(RegisterPage);
