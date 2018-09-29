import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { PrimaryButton } from 'core/components/Button';
import Typography from 'core/components/Typography';
import Link from 'core/components/Link';

const styles = () => ({
  controls: {
    textAlign: 'center',
    marginTop: 24,
  },
  button: {
    margin: '0 8px',
  },
  headline: {
    textAlign: 'center',
  },
});

const AuthPage = ({ classes }) => (
  <div>
    <Typography variant="headline" className={classes.headline}>
        Mine BTC, ETH, Monero
    </Typography>
    <div className={classes.controls}>
      <Link to="/login" href="/login">
        <PrimaryButton className={classes.button} variant="raised" color="primary">Login</PrimaryButton>
      </Link>
      <Link to="/register" href="/register">
        <PrimaryButton className={classes.button} variant="raised" color="primary">Register</PrimaryButton>
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(AuthPage);
