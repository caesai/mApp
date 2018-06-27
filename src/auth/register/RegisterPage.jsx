import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import connectStore from './connectStore';

const styles = () => ({
  root: {
    margin: '0 auto',
    maxWidth: 320,
  },
});

class RegisterPage extends Component {
  componentWillMount() {
    const { generateCredentials } = this.props;

    generateCredentials();
  }

  handleSubmit = async (data) => {
    await this.props.requestRegisterUser(data.password);

    this.props.history.push('/profile');
  };

  render() {
    const { classes, mnemonic } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title">Generated mnemonic key</Typography>
        <Typography>{mnemonic}</Typography>
        <Form onSubmit={this.handleSubmit} buttonLabel="Register">
          <Field name="name" rule="alpha" />
          <Field name="email" rule="email" />
          <Field name="password" rule="required" />
        </Form>
      </div>
    );
  }
}

const applyDecorators = compose(
  withRouter,
  connectStore,
  withStyles(styles),
);

export default applyDecorators(RegisterPage);
