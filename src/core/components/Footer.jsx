import React from 'react';
import compose from 'recompose/compose';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import Link from 'core/components/Link';
import withContent from 'core/staticContent/withContent';

const styles = () => ({
  root: {
    padding: '0 24px',
    display: 'flex',
    height: 64,
    backgroundColor: '#f5f5f5',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    boxShadow: '0px -2px 4px 1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  copy: {
    marginLeft: 'auto',
    lineHeight: '64px',
    flex: '0 0 200px',
  },
  navMenu: {
    display: 'flex',
  },
});

const Footer = ({ classes, i18n }) => (
  <footer className={classes.root}>
    <MenuList className={classes.navMenu}>
      <Link to="/contacts">
        <MenuItem>
          {i18n('navMenu.contacts')}
        </MenuItem>
      </Link>
      <Link to="/feedback">
        <MenuItem>
          {i18n('navMenu.feedback')}
        </MenuItem>
      </Link>
    </MenuList>
    <Typography className={classes.copy}>(с) 2018 SimpleMining</Typography>
  </footer>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(Footer);
