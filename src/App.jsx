import React from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import RegisterPage from './auth/register/RegisterPage';
import LoginPage from './auth/login/LoginPage';
import AuthPage from './auth/AuthPage';
import ProfilePage from './auth/profile/ProfilePage';
import Header from './core/components/Header';

const styles = () => ({
  root: {
    maxWidth: 640,
    margin: '0 auto',
  },
  content: {
    padding: 8,
  },
  '@global': {
    a: {
      textDecoration: 'none',
    },
    body: {
      margin: 0,
    },
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <div className={classes.content}>
      <Route exact path="/" component={AuthPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
    </div>
  </div>
);

export default withStyles(styles)(App);
