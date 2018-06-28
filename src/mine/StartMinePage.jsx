import React from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';
import Typography from 'core/components/Typography';

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
      <Typography variant="title">{i18n('mine.start_mine.title')}</Typography>
      <Typography variant="subheading">{i18n('mine.start_mine.subtitle')}</Typography>
      <Typography>{i18n('mine.start_mine.text')}</Typography>
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
    <div className={classes.video}>
      <iframe
        title="mine video"
        allowFullScreen
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GmOzih6I1zs"
        frameBorder="0"
      />
    </div>
  </div>
);

const applyDecorators = compose(
  withStyles(styles),
  withContent,
);

export default applyDecorators(StartMinePage);
