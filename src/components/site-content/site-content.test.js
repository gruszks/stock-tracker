import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SiteContent from './site-content';

it('renders correctly', () => {
  const { asFragment } = render(
    <SiteContent title="Site title">text</SiteContent>
  );

  expect(asFragment()).toMatchSnapshot();
});
