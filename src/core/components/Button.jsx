import React from 'react';
import ButtonMui from '@material-ui/core/Button';

const Button = ({
  color,
  onClick,
  variant,
  children,
  className,
  ...other
}) => (
  <ButtonMui
    className={className}
    color={color}
    variant={variant}
    onClick={onClick}
    {...other}
  >
    {children}
  </ButtonMui>
);

export default Button;
