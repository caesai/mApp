import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: 275,
    height: 54,
    borderRadius: '27px',
    backgroundImage: 'linear-gradient(to left, #0053ff, #00b4ff)',
    boxShadow: '0 8px 20px 0 rgba(70, 86, 132, 0.2), 0 15px 55px 0 rgba(157, 163, 180, 0.2)',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
  },
});

const Button = ({
  classes,
  children,
  onClick,
  className,
}) => (
  <button
    className={`${classes.root} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default withStyles(styles)(Button);
