import React from 'react';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

const WorksPage = ({ i18n }) => (
  <div>
    <Typography>{i18n('works.body.first')}</Typography>
    <Typography>{i18n('works.body.second')}</Typography>
  </div>
);

export default withContent(WorksPage);
