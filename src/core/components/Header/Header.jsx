import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';

import logoIcon from './assets/logo.svg';
import menuIcon from './assets/menu.svg';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  menu: {
    display: 'block',
    flex: '0 0 22px',
    marginLeft: 'auto',
  },
  logo: {
    height: 40,
    display: 'block',
    flex: '0 0 auto',
  },
});

const Header = ({ classes, i18n }) => (
  <header className={classes.root}>
    <img className={classes.logo} src={logoIcon} alt="logo" />
    <img
      className={classes.menu}
      src={menuIcon}
      alt="menu"
      width="22"
      height="16"
    />
  </header>
);

const applyDecorators = compose(
  withStyles(styles),
);

export default applyDecorators(Header);
