import React from 'react';
import TypographyMui from '@material-ui/core/Typography';

const Typography = ({ children, ...other }) => (
  <TypographyMui
    {...other}
  >
    {children}
  </TypographyMui>
);

export default Typography;
