import React from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import RegisterPage from './auth/register/RegisterPage';
import LoginPage from './auth/login/LoginPage';
import ProfilePage from './auth/profile/ProfilePage';
import Header from './core/components/Header/Header';
import AboutPage from './info/AboutPage';
import WorksPage from './info/WorksPage';
import SpendPage from './info/SpendPage';
import FeedbackPage from './info/FeedbackPage';
import StatMinePage from './mine/StartMinePage/StartMinePage';
import MineStatus from './mine/MineStatus';
import ResetPasswordPage from './auth/resetPassword/ResetPasswordPage';
import WalletsPage from './auth/wallet/WalletsPage';

const styles = () => ({
  root: {
    padding: 20,
    margin: '0 auto',
  },
  content: {
    margin: '0 auto',
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
      <Route path="/wallets" component={WalletsPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/how-it-works" component={WorksPage} />
      <Route path="/how-to-spend" component={SpendPage} />
      <Route path="/mine-status" component={MineStatus} />
      <Route path="/feedback" component={FeedbackPage} />
    </div>
  </div>
);

export default withStyles(styles)(App);
