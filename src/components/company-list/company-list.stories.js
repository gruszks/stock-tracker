import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CompanyList from './company-list';

const companies = [
  {
    symbol: 'WP',
    name: 'Worldpay Inc.',
    region: 'United States',
    marketOpen: '09:30',
    marketClose: '16:00',
    timezone: 'UTC-04',
    currency: 'USD',
    image: 'https://logo.clearbit.com/worldpay.com',
    domain: 'worldpay.com',
    price: '135.0000',
    tradingDay: '2019-07-30',
    change: '-2.8500',
    changePercent: '-2.0675%',
  },
  {
    symbol: 'FB',
    name: 'Facebook Inc.',
    region: 'United States',
    marketOpen: '09:30',
    marketClose: '16:00',
    timezone: 'UTC-04',
    currency: 'USD',
    image: 'https://logo.clearbit.com/facebook.com',
    domain: 'facebook.com',
    price: '188.4100',
    tradingDay: '2019-08-09',
    change: '-1.7500',
    changePercent: '-0.9203%',
  },
  {
    symbol: '7CD.FRK',
    name: 'CD Projekt S.A.',
    region: 'Frankfurt',
    marketOpen: '08:00',
    marketClose: '20:00',
    timezone: 'UTC+02',
    currency: 'EUR',
    image: 'https://logo.clearbit.com/cdprojekt.com',
    domain: 'cdprojekt.com',
    price: '51.3800',
    tradingDay: '2019-08-09',
    change: '-0.1800',
    changePercent: '-0.3491%',
  },
  {
    symbol: 'IMSAX',
    name: 'IMS Dividend Growth Fund',
    region: 'United States',
    marketOpen: '09:30',
    marketClose: '16:00',
    timezone: 'UTC-04',
    currency: 'USD',
    image: null,
    domain: null,
    price: '16.4500',
    tradingDay: '2019-08-07',
    change: '0.0300',
    changePercent: '0.1827%',
  },
];

storiesOf('Components/Company List', module)
  .addDecorator((story) => (
    <div style={{ maxWidth: 700, margin: 10 }}>
      <ul>{story()}</ul>
    </div>
  ))
  .add('with data', () => (
    <CompanyList data={companies} onDeleteCompany={action('onDeleteCompany')} />
  ))
  .add('no data', () => (
    <CompanyList data={[]} onDeleteCompany={action('onDeleteCompany')} />
  ));
