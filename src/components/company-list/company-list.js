import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CompanyListItem from 'components/company-list-item';
import * as Styled from './company-list.styles';

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
        <Styled.List>
          {keys.map((symbol) => (
            <CompanyListItem
              key={symbol}
              data={data[symbol]}
              onDeleteCompany={onDeleteCompany}
            />
          ))}
        </Styled.List>
      )}
    </div>
  );
};

CompanyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteCompany: PropTypes.func.isRequired,
};

export default CompanyList;
