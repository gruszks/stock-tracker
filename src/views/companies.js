import React from 'react';
import { Link } from 'react-router-dom';

import SiteContent from 'components/site-content';
import * as Styled from './companies.styles.js';

const Companies = () => (
  <SiteContent title="Companies">
    <p>
      There are no companies yet.{' '}
      <Link to="/companies/add/">Track your first company</Link>.
    </p>
  </SiteContent>
);

export default Companies;
