import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from 'assets/delete.png';
import * as Styled from './company-list-item.styles';

const CompanyListItem = ({ data, onDeleteCompany }) => {
  const {
    symbol,
    name,
    region,
    marketOpen,
    marketClose,
    timezone,
    currency,
    image,
    domain,
    price,
    tradingDay,
    change,
    changePercent,
  } = data;

  return (
    <Styled.Item key={symbol}>
      <Styled.Content>
        <div>
          <Styled.Name>{name}</Styled.Name>
          <span>{symbol}</span> <span>{domain}</span>
        </div>
        <div>
          <span>{region}</span>
          <span>
            {marketOpen} - {marketClose}
          </span>
          <span>{timezone}</span>
        </div>
        <div>
          <span>
            <strong>{price}</strong>
          </span>
          <span>{currency}</span>
          <span>{change}</span>
          <span>{changePercent}</span>
          <span>Closed: {tradingDay}</span>
        </div>
      </Styled.Content>
      {image ? (
        <Styled.Image src={image} alt={name} />
      ) : (
        <Styled.NoImage>no image</Styled.NoImage>
      )}

      <Styled.Delete onClick={() => onDeleteCompany(symbol)}>
        <img src={DeleteIcon} alt="Delete" />
      </Styled.Delete>
    </Styled.Item>
  );
};

CompanyListItem.propTypes = {
  data: PropTypes.object.isRequired,
  onDeleteCompany: PropTypes.func.isRequired,
};

export default CompanyListItem;
