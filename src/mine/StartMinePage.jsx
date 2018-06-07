import React from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';
import Typography from 'core/components/Typography';

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
    <Typography variant="title">{i18n('mine.start_mine_title')}</Typography>
    <Link to="/mine-status">
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
      >
        {i18n('mine.start_mine_button')}
      </Button>
    </Link>
  </div>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(StartMinePage);
