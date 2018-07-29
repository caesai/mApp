import React, { Component } from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import withContent from 'core/staticContent/withContent';

const styles = () => ({
  root: {
    margin: '0 auto',
    maxWidth: 320,
  },
});

class ResetPasswordPage extends Component {
  handleSubmit = () => {
    // submit reset password
  };

  render() {
    const { classes, i18n } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title" align="center">{i18n('resetPassword.title')}</Typography>
        <Form onSubmit={this.handleSubmit}>
          <Field name="mnemonic" rule="alpha" />
        </Form>
      </div>
    );
  }
}

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(ResetPasswordPage);
