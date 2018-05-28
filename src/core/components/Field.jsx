import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const capitalize = name => name[0].toUpperCase() + name.substring(1, name.length);

const Field = ({
  name,
  label,
  value,
  onChange,
  error,
}) => (
  <FormControl error={Boolean(error)} fullWidth key={name}>
    <InputLabel>{label || capitalize(name)}</InputLabel>
    <Input value={value || ''} onChange={onChange} name={name} />
    <FormHelperText>{error}</FormHelperText>
  </FormControl>
);

export default Field;
