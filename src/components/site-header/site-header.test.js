import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import SiteHeader from './site-header';

it('renders correctly', () => {
  const { asFragment } = render(
    <Router>
      <SiteHeader />
    </Router>
  );

  expect(asFragment()).toMatchSnapshot();
});
