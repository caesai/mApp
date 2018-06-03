import React from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import RegisterPage from './auth/register/RegisterPage';
import LoginPage from './auth/login/LoginPage';
import ProfilePage from './auth/profile/ProfilePage';
import Header from './core/components/Header';
import AboutPage from './info/AboutPage';
import WorksPage from './info/WorksPage';
import SpendPage from './info/SpendPage';
import StatMinePage from './mine/StartMinePage';

const styles = () => ({
  root: {
    margin: '0 auto',
  },
  content: {
    padding: 8,
  },
  '@global': {
    a: {
      color: 'black',
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
      <Route exact path="/" component={StatMinePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/how-it-works" component={WorksPage} />
      <Route path="/how-to-spend" component={SpendPage} />
    </div>
  </div>
);

export default withStyles(styles)(App);
