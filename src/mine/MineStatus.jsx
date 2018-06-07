import React from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';

const styles = () => ({
  balance: {
    display: 'flex',
    justifyContent: 'center',
  },
  balanceItem: {
    flex: 1,
  },
  buttonWrap: {
    textAlign: 'center',
  },
});

const statuses = [
  {
    vendor: 'BTC',
    balance: '00.0000',
  },
  {
    vendor: 'ETH',
    balance: '00.0000',
  },
  {
    vendor: 'XMR',
    balance: '00.0000',
  },
];

const MineStatus = ({ classes, i18n }) => (
  <div className={classes.root}>
    <Typography variant="headline" align="center">{i18n('mine.status.title')}</Typography>
    <br />
    <div className={classes.balance}>
      {
        statuses.map(({ vendor, balance }) => (
          <div key={vendor} className={classes.balanceItem}>
            <Typography align="center">{vendor}: {balance}</Typography>
          </div>
        ))
      }
    </div>
    <br />
    <div className={classes.buttonWrap}>
      <Link to="/login">
        <Button variant="raised">{i18n('mine.status.login')}</Button>
      </Link>
    </div>
    <br />
    <Typography align="center">
      {i18n('mine.status.login_desc')}
    </Typography>
  </div>
);

const applyDecorators = compose(
  withContent,
  withStyles(styles),
);

export default applyDecorators(MineStatus);
