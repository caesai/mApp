import React, { Component } from 'react';
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
    textAlign: 'center',
  },
  buttonWrap: {
    textAlign: 'center',
  },
});

const statuses = [
  {
    vendor: 'Bitcoin',
    balance: '00.1231',
    price: '$8000',
    speed: '$8',
  },
  {
    vendor: 'Etherium',
    balance: '1.1002',
    price: '732',
    speed: '$8',
  },
  {
    vendor: 'Monero',
    balance: '54.0221',
    price: '135',
    speed: '$8',
  },
];

class MineStatus extends Component {
  someRef = React.createRef();

  render() {
    const { classes, i18n } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline" align="center">{i18n('mine.status.title')}</Typography>
        <br />
        <div className={classes.balance} ref={this.someRef}>
          {
            statuses.map(({
              vendor,
              balance,
              price,
              speed,
            }) => (
              <div
                key={vendor}
                className={classes.balanceItem}
              >
                <Typography variant="subheading">{vendor}</Typography>
                <Typography>Balance: {balance}</Typography>
                <Typography>Price: {price}</Typography>
                <Typography>Speed: {speed}/день</Typography>
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
  }
}

const applyDecorators = compose(
  withContent,
  withStyles(styles),
);

export default applyDecorators(MineStatus);
