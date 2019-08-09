import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CompanyListItem from 'components/company-list-item';
import * as Styled from './company-list.styles';

const CompanyList = ({ data, onDeleteCompany }) => {
  return (
    <div>
      {!data.length ? (
        <p>
          There are no companies yet.{' '}
          <Link to="/companies/add/">Track your first company</Link>.
        </p>
      ) : (
        <Styled.List>
          {data.map((company) => (
            <CompanyListItem
              key={company.symbol}
              data={company}
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
