import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CompanyListItem from './company-list-item';

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

storiesOf('Components/Company List Item', module)
  .addDecorator((story) => (
    <div style={{ maxWidth: 700, margin: 10 }}>
      <ul>{story()}</ul>
    </div>
  ))
  .add('with all data', () => (
    <CompanyListItem
      data={company}
      onDeleteCompany={action('onDeleteCompany')}
    />
  ))
  .add('without image', () => (
    <CompanyListItem
      data={{ ...company, image: null }}
      onDeleteCompany={action('onDeleteCompany')}
    />
  ))
  .add('negative price change', () => (
    <CompanyListItem
      data={{ ...company, change: -5, changePercent: -5.543543 }}
      onDeleteCompany={action('onDeleteCompany')}
    />
  ))
  .add('positive price change', () => (
    <CompanyListItem
      data={{ ...company, change: 7.5455, changePercent: 45.543543 }}
      onDeleteCompany={action('onDeleteCompany')}
    />
  ))
  .add('no price change', () => (
    <CompanyListItem
      data={{ ...company, change: 0, changePercent: 0 }}
      onDeleteCompany={action('onDeleteCompany')}
    />
  ));
