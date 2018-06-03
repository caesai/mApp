import React from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';

const styles = () => ({
  root: {
    textAlign: 'center',
  },
  button: {
    marginTop: 48,
  },
});

const StartMinePage = ({ classes, i18n }) => (
  <div className={classes.root}>
    <Link to="/" href="/">
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
      >
        {i18n('mine.stat_mine')}
      </Button>
    </Link>
  </div>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(StartMinePage);
