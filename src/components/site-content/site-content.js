import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './site-content.styles';

const SiteContent = ({ children, title }) => (
  <Styled.Main>
    <section>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </section>
  </Styled.Main>
);

SiteContent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteContent;
