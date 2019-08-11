import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SiteContent from 'components/site-content';
import CompanyList from 'components/company-list';
import { deleteCompany, updateCompany } from 'actions';

class Companies extends PureComponent {
  componentDidMount() {
    const { data, onUpdateCompany } = this.props;

    data.forEach(({ symbol }) => {
      onUpdateCompany(symbol);
    });
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

Companies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onDeleteCompany: PropTypes.func.isRequired,
  onUpdateCompany: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.companies.data,
});

const mapDispatchToProps = {
  onDeleteCompany: deleteCompany,
  onUpdateCompany: updateCompany,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
