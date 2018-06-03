import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from 'core/components/Typography';
import LinkVendor from 'react-router-dom/Link';

const styles = () => ({
  text: {
    textDecoration: 'underline',
    display: 'inline-block',
  },
});

const Link = ({ to, children, classes }) => (
  <LinkVendor to={to} href={to}>
    <Typography className={classes.text}>{children}</Typography>
  </LinkVendor>
);

export default withStyles(styles)(Link);
