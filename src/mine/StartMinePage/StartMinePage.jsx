import React from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';
import Typography from 'core/components/Typography';
import image1 from './assets/image1.svg';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-between',
    flexFlow: 'row wrap',
  },
  button: {
    marginTop: 48,
  },
  main: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});

const StartMinePage = ({ classes, i18n }) => (
  <div className={classes.root}>
    <div className={classes.main}>
      <Typography variant="headline">{i18n('mine.start_mine.title')}</Typography>
      <img src={image1} alt="computers" />
      <Link to="/mine-status">
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
        >
          {i18n('mine.start_mine.button')}
        </Button>
      </Link>
    </div>
  </div>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(StartMinePage);
