import React from 'react';
import LinkVendor from 'react-router-dom/Link';

const Link = ({ to, children }) => (
  <LinkVendor to={to} href={to}>
    {children}
  </LinkVendor>
);

export default Link;

