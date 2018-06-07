import React from 'react';
import TypographyMui from '@material-ui/core/Typography';

const Typography = ({
  children,
  variant,
  className,
  align,
}) => (
  <TypographyMui
    variant={variant}
    className={className}
    align={align}
  >
    {children}
  </TypographyMui>
);

export default Typography;
