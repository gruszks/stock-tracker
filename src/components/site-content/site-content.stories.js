import React from 'react';
import { storiesOf } from '@storybook/react';

import SiteContent from './site-content';

storiesOf('Components/Site Content', module).add('default', () => (
  <SiteContent title="Site Title">content</SiteContent>
));
