import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteContent from 'components/site-content';
import CompaniesList from 'component/companies-list';
import { deleteCompany } from 'actions.js';

class Companies extends PureComponent {
  render() {
    const { companies, onDeleteCompany } = this.props;

    return (
      <SiteContent title="Companies">
        {!Object.keys(companies).length ? (
          <p>
            There are no companies yet.{' '}
            <Link to="/companies/add/">Track your first company</Link>.
          </p>
        ) : (
          <CompaniesList data={companies} onDeleteCompany={onDeleteCompany} />
        )}
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
