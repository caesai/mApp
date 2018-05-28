import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import AuthPage from './auth/AuthPage';
import Profile from './auth/Profile';
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
  <BrowserRouter>
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Route exact path="/" component={AuthPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
      </div>
    </div>
  </BrowserRouter>
);

export default withStyles(styles)(App);
