import React from 'react';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

const AboutPage = ({ i18n }) => (
  <div>
    <Typography>{i18n('about.body.first')}</Typography>
    <Typography>{i18n('about.body.second')}</Typography>
  </div>
);

export default withContent(AboutPage);
