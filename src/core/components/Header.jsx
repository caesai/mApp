import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';

import Link from 'core/components/Link';
import Typography from 'core/components/Typography';
import HeaderLink from 'auth/misc/HeaderLink';
import withContent from 'core/staticContent/withContent';

const styles = () => ({
  navMenu: {
    display: 'flex',
  },
  loginLink: {
    marginLeft: 'auto',
  },
});

const Header = ({ classes, i18n }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Link to="/">
        <Typography
          variant="title"
          color="inherit"
        >
          Home
        </Typography>
      </Link>
      <MenuList className={classes.navMenu}>
        <Link to="/about">
          <MenuItem>
            {i18n('navMenu.about')}
          </MenuItem>
        </Link>
        <Link to="/how-it-works">
          <MenuItem>
            {i18n('navMenu.works')}
          </MenuItem>
        </Link>
        <Link to="/how-to-spend">
          <MenuItem>
            {i18n('navMenu.spend')}
          </MenuItem>
        </Link>
      </MenuList>
      <div className={classes.loginLink}>
        <HeaderLink />
      </div>
    </Toolbar>
  </AppBar>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(Header);
