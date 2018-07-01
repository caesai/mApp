import React, { Component } from 'react';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

class FeedbackPage extends Component {
  handleSubmit = () => {
    //
  };

  render() {
    const { i18n } = this.props;

    return (
      <div>
        <Typography variant="title">{i18n('feedback.title')}</Typography>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Field name="email" rule="required" />
          <Field name="topic" rule="required" />
          <Field multiline name="text" rows={4} rule="required" />
        </Form>
      </div>
    );
  }
}

export default withContent(FeedbackPage);
