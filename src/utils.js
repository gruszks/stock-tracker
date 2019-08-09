export const prepareCompanyNameForImageSearch = (name) =>
  name.replace(/\s(l\.p\.|inc\.|inc)/gi, '');

export const prepareCompanyData = (
  searchResponse,
  quoteResponse,
  infoResponse
) => {
  const data = {
    symbol: searchResponse['1. symbol'],
    name: searchResponse['2. name'],
    region: searchResponse['4. region'],
    marketOpen: searchResponse['5. marketOpen'],
    marketClose: searchResponse['6. marketClose'],
    timezone: searchResponse['7. timezone'],
    currency: searchResponse['8. currency'],
    image: null,
    domain: null,
  };

  if (infoResponse.length) {
    data.image = infoResponse[0].logo;
    data.domain = infoResponse[0].domain;
  }

  if (quoteResponse) {
    const quoteData = quoteResponse['Global Quote'];

    data.price = quoteData['05. price'];
    data.tradingDay = quoteData['07. latest trading day'];
    data.change = quoteData['09. change'];
    data.changePercent = quoteData['10. change percent'];
  }

  return data;
};
