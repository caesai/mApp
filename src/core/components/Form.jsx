import React, { Component } from 'react';
import Button from 'core/components/Button';

class Form extends Component {
  state = {
    data: {},
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.data);
  };

  handleFieldChange = (name, value) => {
    const { data: datPrev } = this.state;
    const data = {
      ...datPrev,
    };

    data[name] = value;

    this.setState({ data });
  };

  render() {
    const { children, buttonLabel } = this.props;
    const { data } = this.state;

    return (
      <div>
        {
          children.map(field => (
            field.type({
              key: field.props.name,
              name: field.props.name,
              onChange: this.handleFieldChange,
              value: data[field.props.name] || '',
              label: field.label,
            })
          ))
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
