import React from 'react';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

const WorksPage = ({ i18n }) => (
  <div>
    <Typography align="center" variant="title">{i18n('works.body.title')}</Typography>
    <br />
    <Typography>{i18n('works.body.first')}</Typography>
    <br />
    <Typography>{i18n('works.body.second')}</Typography>
  </div>
);

export default withContent(WorksPage);
