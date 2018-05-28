import React from 'react';
import TypographyMui from '@material-ui/core/Typography';

const Typography = ({ children, variant, className }) => (
  <TypographyMui variant={variant} className={className}>{children}</TypographyMui>
);

export default Typography;
