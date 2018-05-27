import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import AuthPage from './auth/AuthPage';
import Profile from './auth/Profile';

const styles = () => ({
  root: {
    maxWidth: 640,
    margin: '0 auto',
  },
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
});

const App = ({ classes }) => (
  <BrowserRouter>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default withStyles(styles)(App);
