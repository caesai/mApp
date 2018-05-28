import React from 'react';
import PaperMui from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    padding: 16,
  },
});

const Paper = (props, classes) => (
  <PaperMui {...props} className={classes.root} />
);

export default withStyles(styles)(Paper);
