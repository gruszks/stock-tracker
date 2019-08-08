import React from 'react';

const CompanyListItem = ({ data, onDeleteCompany }) => {
  const {
    '1. symbol': symbol,
    '2. name': name,
    '4. region': region,
    '5. marketOpen': marketOpen,
    '6. marketClose': marketClose,
    '7. timezone': timezone,
    '8. currency': currency,
  } = data;

  return (
    <li key={symbol}>
      <h3>{name}</h3> {symbol}
      {region} {marketOpen} - {marketClose} {timezone}
      {currency}
      <picture>
        <img src="" alt="" />
      </picture>
      <button onClick={() => onDeleteCompany(symbol)}>Remove</button>
    </li>
  );
};

export default CompanyListItem;
