import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const VARIANT_TITLE = 'title';
const VARIANT_HEADLINE = 'headline';

const selectTag = (variant) => {
  switch (variant) {
    case VARIANT_TITLE:
      return 'h2';
    case VARIANT_HEADLINE:
      return 'h1';
    default:
      return 'p';
  }
};

const styles = () => ({
  root: {
    fontFamily: 'Rubik, sans-serif',
    fontWeight: '400',
  },
});

const Typography = ({ children, variant, classes }) => {
  const Component = selectTag(variant);

  return (
    <Component className={classes.root}>
      {children}
    </Component>
  );
};

export default withStyles(styles)(Typography);
