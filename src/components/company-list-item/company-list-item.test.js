import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CompanyListItem from './company-list-item';

it('renders correctly', () => {
  const company = {
    change: 1.12,
    changePercent: 0.589,
    currency: 'USD',
    domain: 'facebook.com',
    image: 'https://logo.clearbit.com/facebook.com',
    marketClose: '16:00',
    marketOpen: '09:30',
    name: 'Facebook Inc.',
    price: 189.04,
    region: 'United States',
    symbol: 'FB',
    timezone: 'UTC-04',
    tradingDay: '2019-08-09',
  };
  const { asFragment } = render(
    <CompanyListItem data={company} onDeleteCompany={jest.fn()} />
  );

  expect(asFragment()).toMatchSnapshot();
});
