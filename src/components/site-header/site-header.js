import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import * as Styled from './site-header.styles';

const SiteHeader = () => (
  <Styled.Header>
    <Styled.Logo>
      <Link to="/">Stock Tracker</Link>
    </Styled.Logo>
    <nav>
      <Styled.Menu>
        <li>
          <NavLink to="/companies/add/" exact>
            Track new company
          </NavLink>
        </li>
        <li>
          <NavLink to="/companies/" exact>
            Companies
          </NavLink>
        </li>
      </Styled.Menu>
    </nav>
  </Styled.Header>
);

export default SiteHeader;
