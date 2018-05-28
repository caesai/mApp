import React from 'react';
import ButtonMui from '@material-ui/core/Button';

const Button = ({
  color,
  onClick,
  variant,
  children,
  className,
}) => (
  <ButtonMui
    className={className}
    color={color}
    variant={variant}
    onClick={onClick}
  >
    {children}
  </ButtonMui>
);

export default Button;
