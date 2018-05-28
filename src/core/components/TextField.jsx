import React, { Component } from 'react';
import TextFieldMui from '@material-ui/core/TextField';

class TextField extends Component {
  handleChange = ({ target }) => {
    const { name, onChange } = this.props;

    onChange(name, target.value);
  };

  render() {
    const {
      id,
      label,
      className,
      value,
    } = this.props;

    return (
      <TextFieldMui
        fullWidth
        id={id}
        label={label}
        className={className}
        value={value}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }
}

export default TextField;
