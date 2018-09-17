import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
import isEmpty from 'validator/lib/isEmpty';
import Button from 'core/components/Button';

const validate = (name, value = '', rule) => {
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
    data: new Map(),
    errors: new Map(),
  };

  getFields = () => {
    const { children } = this.props;
    if (Array.isArray(children)) {
      return children.filter(child => child);
    }

    if (children) {
      return [children];
    }

    return [];
  };

  validateField = (name) => {
    const fields = this.getFields();
    const field = fields.find(fieldsItem => fieldsItem.props.name === name);

    const { rule } = field.props;
    const value = this.state.data.get(name);

    let error;
    if (rule) {
      error = validate(name, value, rule);
    }

    return error;
  };

  handleSubmit = () => {
    const { errors, data } = this.state;

    const fields = this.getFields();
    let hasError = false;
    fields.forEach(({ props: { name } }) => {
      const error = this.validateField(name);
      if (error) {
        hasError = true;
      }
      errors.set(name, error);
    });

    if (!hasError) {
      const submitData = {};
      data.forEach((value, key) => {
        submitData[key] = value;
      });
      this.props.onSubmit(submitData);
    } else {
      this.setState({ errors });
    }
  };

  handleFieldChange = ({ target }) => {
    const { data } = this.state;
    const { name, value } = target;

    data.set(name, value);

    this.setState({ data });

    if (this.props.onChange) {
      this.props.onChange(data);
    }
  };

  handleFieldBlur = ({ target }) => {
    const { errors } = this.state;
    const { name } = target;
    const error = this.validateField(name);

    errors.set(name, error);

    this.setState({ errors });
  };

  convertField(field) {
    if (!field) {
      return null;
    }

    const { data, errors } = this.state;
    const {
      name,
      label,
      rows,
      multiline,
    } = field.props;
    const value = data.get(name);
    const error = errors.get(name);

    return field.type({
      rows,
      name,
      label,
      value,
      error,
      multiline,
      key: name,
      onBlur: this.handleFieldBlur,
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
