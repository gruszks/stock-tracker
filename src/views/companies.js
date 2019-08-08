import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SiteContent from 'components/site-content';
import CompanyList from 'components/company-list';
import { deleteCompany } from 'actions.js';

class Companies extends PureComponent {
  render() {
    const { companies, onDeleteCompany } = this.props;

    return (
      <SiteContent title="Companies">
        <CompanyList data={companies} onDeleteCompany={onDeleteCompany} />
      </SiteContent>
    );
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies.selected,
});

const mapDispatchToProps = {
  onDeleteCompany: deleteCompany,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
