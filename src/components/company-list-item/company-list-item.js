import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from 'assets/delete.png';
import UpIcon from 'assets/up.png';
import DownIcon from 'assets/down.png';
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
  const state = change === 0 ? 'stable' : change > 0 ? 'up' : 'down';

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
          <span title={price}>
            <strong>{price.toFixed(2)}</strong>
          </span>
          <span>{currency}</span>
          <Styled.State state={state}>
            <span title={change}>{change.toFixed(2)}</span>
            <span title={`${changePercent}%`}>
              ({changePercent.toFixed(2)}%){' '}
              {state === 'up' && <img src={UpIcon} alt="up" />}
              {state === 'down' && <img src={DownIcon} alt="down" />}
            </span>
          </Styled.State>
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
