import React from 'react';
import { Link } from 'react-router-dom';

import CompanyListItem from 'components/company-list-item';

const CompanyList = ({ data, onDeleteCompany }) => {
  const keys = Object.keys(data);

  return (
    <div>
      {!keys.length ? (
        <p>
          There are no companies yet.{' '}
          <Link to="/companies/add/">Track your first company</Link>.
        </p>
      ) : (
        <ul>
          {keys.map((symbol) => (
            <CompanyListItem
              key={symbol}
              data={data[symbol]}
              onDeleteCompany={onDeleteCompany}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyList;
