import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
import isEmpty from 'validator/lib/isEmpty';
import Button from 'core/components/Button';

const validateField = (name, value, rule) => {
  if (value === undefined) {
    return '';
  }

  switch (rule) {
    case 'email':
      return isEmail(value) ? '' : 'Invalid email';
    case 'alpha': {
      return isAlpha(value) ? '' : 'Not valid name';
    }
    case 'required': {
      return !isEmpty(value) ? '' : 'Required field';
    }
    default:
      return '';
  }
};

class Form extends Component {
  state = {
    data: {},
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.data);
  };

  handleFieldChange = ({ target }) => {
    const { data: datPrev } = this.state;
    const data = {
      ...datPrev,
    };

    data[target.name] = target.value;

    this.setState({ data });

    if (this.props.onChange) {
      this.props.onChange(data);
    }
  };

  convertField(field) {
    if (!field) {
      return null;
    }

    const { data } = this.state;
    const {
      name,
      label,
      rule,
      rows,
      multiline,
    } = field.props;
    const value = data[name];

    return field.type({
      rows,
      name,
      label,
      value,
      multiline,
      key: name,
      error: validateField(name, value, rule),
      onChange: this.handleFieldChange,
    });
  }

  renderFields() {
    const { children } = this.props;

    if (Array.isArray(children)) {
      return children.map(field => this.convertField(field));
    }

    return this.convertField(children);
  }

  renderButton() {
    const { buttonLabel, noButton } = this.props;

    if (noButton) {
      return null;
    }

    return (
      <Button
        variant="raised"
        color="primary"
        onClick={this.handleSubmit}
      >
        {buttonLabel || 'Submit'}
      </Button>
    );
  }

  render() {
    return (
      <div>
        { this.renderFields() }
        <br />
        <br />
        { this.renderButton() }
      </div>
    );
  }
}

export default Form;
