import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
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
  };

  render() {
    const { children, buttonLabel } = this.props;
    const { data } = this.state;

    return (
      <div>
        {
          children.map((field) => {
            const { props: { name, label, rule } } = field;
            const value = data[name];

            return field.type({
              name,
              label,
              value,
              key: name,
              error: validateField(name, value, rule),
              onChange: this.handleFieldChange,
            });
          })
        }
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleSubmit}
        >
          {buttonLabel || 'Submit'}
        </Button>
      </div>
    );
  }
}

export default Form;
