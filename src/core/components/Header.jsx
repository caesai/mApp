import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Mining app
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
