import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SiteContent from 'components/site-content';
import CompanyList from 'components/company-list';
import { deleteCompany } from 'actions.js';

class Companies extends PureComponent {
  componentDidMount() {
    console.log('mounting');
  }

  render() {
    const { data, onDeleteCompany } = this.props;

    return (
      <SiteContent title="Companies">
        <CompanyList data={data} onDeleteCompany={onDeleteCompany} />
      </SiteContent>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.companies.data,
});

const mapDispatchToProps = {
  onDeleteCompany: deleteCompany,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
