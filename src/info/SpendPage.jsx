import React from 'react';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

const SpendPage = ({ i18n }) => (
  <div>
    <Typography>{i18n('spend.body.first')}</Typography>
    <Typography>{i18n('spend.body.second')}</Typography>
  </div>
);

export default withContent(SpendPage);
