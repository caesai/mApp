import React from 'react';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from 'core/components/Button';
import Typography from 'core/components/Typography';

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
        <Button className={classes.button} variant="raised" color="primary">Login</Button>
      </Link>
      <Link to="/register" href="/register">
        <Button className={classes.button} variant="raised" color="primary">Register</Button>
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(AuthPage);
