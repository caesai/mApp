import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';

import withContent from 'core/staticContent/withContent';

const styles = () => ({
  navMenu: {
    display: 'flex',
  },
});

const Header = ({ history, classes, i18n }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" onClick={() => history.push('/')}>
        Mining app
      </Typography>
      <MenuList className={classes.navMenu}>
        <MenuItem
          onClick={() => history.push('/about')}
        >
          {i18n('navMenu.about')}
        </MenuItem>
        <MenuItem
          onClick={() => history.push('/how-it-works')}
        >
          {i18n('navMenu.works')}
        </MenuItem>
        <MenuItem
          onClick={() => history.push('/how-to-spend')}
        >
          {i18n('navMenu.spend')}
        </MenuItem>
      </MenuList>
    </Toolbar>
  </AppBar>
);

const applyDecorators = compose(
  withRouter,
  withStyles(styles),
  withContent,
);

export default applyDecorators(Header);
