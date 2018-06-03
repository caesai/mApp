import React from 'react';
import compose from 'recompose/compose';

import TextLink from 'core/components/TextLink';
import withContent from 'core/staticContent/withContent';
import { connectHeaderLink } from './connectStore';

const HeaderLink = ({ i18n, user }) => {
  let url;
  let text;
  if (user) {
    url = '/profile';
    text = 'Profile';
  } else {
    url = '/login';
    text = i18n('navMenu.login');
  }

  return (
    <TextLink to={url}>
      {text}
    </TextLink>
  );
};

const applyDecorators = compose(
  withContent,
  connectHeaderLink(),
);

export default applyDecorators(HeaderLink);
