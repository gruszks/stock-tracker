import {
  prepareCompanyNameForImageSearch,
  prepareCompanyData,
  extractQuoteData,
} from './utils';

describe('prepareCompanyNameForImageSearch', () => {
  it('return correct company name for image and domain search', () => {
    const TEST_DATA = [
      ['Company INC.', 'Company'],
      ['Company inc', 'Company'],
      ['Company L.P.', 'Company'],
      ['Company l.p.', 'Company'],
      ['Company l.p. test', 'Company test'],
    ];

    TEST_DATA.forEach((data) => {
      const [name, expectedValue] = data;

      expect(prepareCompanyNameForImageSearch(name)).toBe(expectedValue);
    });
  });
});

describe('prepareCompanyData', () => {
  const SEARCH_REPONSE = {
    '1. symbol': 'GOOG',
    '2. name': 'Alphabet Inc.',
    '3. type': 'Equity',
    '4. region': 'United States',
    '5. marketOpen': '09:30',
    '6. marketClose': '16:00',
    '7. timezone': 'UTC-04',
    '8. currency': 'USD',
    '9. matchScore': '1.0000',
  };
  const QUOTE_RESPONSE = {
    'Global Quote': {
      '01. symbol': 'GOOG',
      '02. open': '1197.9900',
      '03. high': '1203.8800',
      '04. low': '1183.6030',
      '05. price': '1188.0100',
      '06. volume': '1013989',
      '07. latest trading day': '2019-08-09',
      '08. previous close': '1204.8000',
      '09. change': '-16.7900',
      '10. change percent': '-1.3936%',
    },
  };
  const INFO_RESPONSE = [
    {
      name: 'Alphabet',
      domain: 'abc.xyz',
      logo: 'https://logo.clearbit.com/abc.xyz',
    },
    {
      name: 'Alpha Beta Gamer',
      domain: 'alphabetagamer.com',
      logo: 'https://logo.clearbit.com/alphabetagamer.com',
    },
  ];

  it('return data about company', () => {
    expect(
      prepareCompanyData(SEARCH_REPONSE, QUOTE_RESPONSE, INFO_RESPONSE)
    ).toStrictEqual({
      change: -16.79,
      changePercent: -1.3936,
      currency: 'USD',
      domain: 'abc.xyz',
      image: 'https://logo.clearbit.com/abc.xyz',
      marketClose: '16:00',
      marketOpen: '09:30',
      name: 'Alphabet Inc.',
      price: 1188.01,
      region: 'United States',
      symbol: 'GOOG',
      timezone: 'UTC-04',
      tradingDay: '2019-08-09',
    });
  });

  it('should return data about company even when info reponse is empty', () => {
    expect(
      prepareCompanyData(SEARCH_REPONSE, QUOTE_RESPONSE, [])
    ).toStrictEqual({
      change: -16.79,
      changePercent: -1.3936,
      currency: 'USD',
      domain: null,
      image: null,
      marketClose: '16:00',
      marketOpen: '09:30',
      name: 'Alphabet Inc.',
      price: 1188.01,
      region: 'United States',
      symbol: 'GOOG',
      timezone: 'UTC-04',
      tradingDay: '2019-08-09',
    });
  });

  it('return data about company even when info and quote reponse is empty', () => {
    expect(prepareCompanyData(SEARCH_REPONSE, {}, [])).toStrictEqual({
      change: null,
      changePercent: null,
      currency: 'USD',
      domain: null,
      image: null,
      marketClose: '16:00',
      marketOpen: '09:30',
      name: 'Alphabet Inc.',
      price: null,
      region: 'United States',
      symbol: 'GOOG',
      timezone: 'UTC-04',
      tradingDay: null,
    });
  });
});

describe('extractQuoteData', () => {
  it('return extract quote data', () => {
    const quoteResponse = {
      'Global Quote': {
        '01. symbol': 'GOOG',
        '02. open': '1197.9900',
        '03. high': '1203.8800',
        '04. low': '1183.6030',
        '05. price': '1188.0100',
        '06. volume': '1013989',
        '07. latest trading day': '2019-08-09',
        '08. previous close': '1204.8000',
        '09. change': '-16.7900',
        '10. change percent': '-1.3936%',
      },
    };

    expect(extractQuoteData(quoteResponse)).toStrictEqual({
      change: -16.79,
      changePercent: -1.3936,
      price: 1188.01,
      tradingDay: '2019-08-09',
    });
  });

  it('should return empty object when response is empty', () => {
    const quoteResponse = {};

    expect(extractQuoteData(quoteResponse)).toStrictEqual({});
  });
});
