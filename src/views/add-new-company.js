import React from 'react';

import SiteContent from 'components/site-content';
import * as Styled from './add-new-company.styles';

const AddNewCompany = () => (
  <SiteContent title="Track new company">
    <form action="">
      <label>
        Company symbol
        <input type="text" placeholder="Company symbol" />
        <small>
          Provide the stock exchange symbol of a company you want to track
        </small>
      </label>
      <button type="submit">Track</button>
    </form>
  </SiteContent>
);

export default AddNewCompany;
