import React from 'react';
import Typography from 'core/components/Typography';
import withContent from 'core/staticContent/withContent';

const AboutPage = ({ i18n }) => (
  <div>
    <Typography align="center" variant="title">{i18n('about.body.title')}</Typography>
    <br />
    <Typography>{i18n('about.body.first')}</Typography>
    <br />
    <Typography>{i18n('about.body.second')}</Typography>
  </div>
);

export default withContent(AboutPage);
