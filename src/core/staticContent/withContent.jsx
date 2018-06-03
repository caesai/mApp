import React from 'react';
import { getLocaleKeys } from './index';

const withContent = ChildComponent => props => (
  <ChildComponent {...props} i18n={getLocaleKeys} />
);

export default withContent;
