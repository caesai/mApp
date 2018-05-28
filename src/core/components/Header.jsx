import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" onClick={() => history.push('/')}>
        Mining app
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withRouter(Header);
