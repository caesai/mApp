import React from 'react';
import TextField from 'core/components/TextField';

const capitalize = name => name[0].toUpperCase() + name.substring(1, name.length);

const Field = ({
  name,
  label,
  value,
  onChange,
}) => (
  <TextField
    key={name}
    name={name}
    value={value || ''}
    label={label || capitalize(name)}
    onChange={onChange}
  />
);

export default Field;
