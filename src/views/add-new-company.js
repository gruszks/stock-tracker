import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import Downshift from 'downshift';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';

import SiteContent from 'components/site-content';
import { addCompany, clearAddCompanyFailed } from 'actions';
import * as Styled from './add-new-company.styles';

const SearchCompanies = loadable(() => import('components/search-companies'));
const validationSchema = Yup.object().shape({
  symbol: Yup.string().required('This field is required'),
});

class AddNewCompany extends Component {
  state = {
    company: null,
  };
  downshiftRef = React.createRef();
  initialValues = { symbol: '', company: null };

  componentWillUnmount() {
    this.props.onClearAddCompanyFailed();
  }

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { onAddCompany } = this.props;
    const { symbol, company } = values;

    onAddCompany(
      symbol,
      company,
      () => {
        this.setState({ company });
        resetForm(this.initialValues);
        this.downshiftRef.current.clearSelection();
        setSubmitting(false);
      },
      () => {
        this.setState({ company: null });
        setSubmitting(false);
      }
    );
  };

  render() {
    const { error, companiesSymbols } = this.props;
    const { company } = this.state;

    return (
      <SiteContent title="Track new company">
        {company && (
          <Styled.SuccessAlert>
            Company {company['1. symbol']} {company['2. name']} added to the
            list.
          </Styled.SuccessAlert>
        )}
        {error && <Styled.ErrorAlert>{error}</Styled.ErrorAlert>}
        <Formik
          enableReinitialize={false}
          initialValues={this.initialValues}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting, setValues, handleBlur }) => (
            <Styled.Form as={Form}>
              <Downshift
                ref={this.downshiftRef}
                onChange={(selection) => {
                  setValues({
                    symbol: selection ? selection['1. symbol'] : '',
                    company: selection ? selection : null,
                  });
                }}
                itemToString={(item) => (item ? item['1. symbol'] : '')}
              >
                {({
                  getInputProps,
                  getItemProps,
                  getLabelProps,
                  getMenuProps,
                  getRootProps,
                  isOpen,
                  inputValue,
                  highlightedIndex,
                  selectedItem,
                }) => (
                  <Styled.FieldWrapper {...getRootProps()}>
                    <Styled.Label htmlFor="symbol" {...getLabelProps()}>
                      Company symbol
                    </Styled.Label>
                    <Styled.SearchListWrapper>
                      <Styled.Field
                        type="text"
                        name="symbol"
                        id="sybmol"
                        placeholder="Company symbol"
                        {...getInputProps({ onBlur: handleBlur })}
                      />
                      {!isOpen ? null : (
                        <Styled.SearchList {...getMenuProps()}>
                          <SearchCompanies symbol={inputValue}>
                            {({
                              loading,
                              error,
                              data: { bestMatches: items = [], Note } = {},
                            }) => {
                              if (loading) {
                                return (
                                  <Styled.SearchListItem>
                                    Loading...
                                  </Styled.SearchListItem>
                                );
                              }

                              if (error) {
                                return (
                                  <Styled.SearchListItem>
                                    {error}
                                  </Styled.SearchListItem>
                                );
                              }

                              // It will show error about API calls limit
                              if (Note) {
                                return (
                                  <Styled.SearchListItem>
                                    {Note}
                                  </Styled.SearchListItem>
                                );
                              }

                              if (!items.length) {
                                return (
                                  <Styled.SearchListItem>
                                    No results...
                                  </Styled.SearchListItem>
                                );
                              }

                              return items
                                .filter(
                                  (item) =>
                                    !companiesSymbols.includes(
                                      item['1. symbol']
                                    )
                                )
                                .map((item, index) => (
                                  <Styled.SearchListItem
                                    highlighted={highlightedIndex === index}
                                    selected={
                                      selectedItem &&
                                      selectedItem['1. symbol'] ===
                                        item['1. symbol']
                                    }
                                    {...getItemProps({
                                      key: item['1. symbol'],
                                      index,
                                      item,
                                    })}
                                  >
                                    {item['1. symbol']} | {item['2. name']} |{' '}
                                    {item['4. region']} | {item['8. currency']}
                                  </Styled.SearchListItem>
                                ));
                            }}
                          </SearchCompanies>
                        </Styled.SearchList>
                      )}
                    </Styled.SearchListWrapper>
                    <small>
                      Provide the stock exchange symbol of a company you want to
                      track
                    </small>
                    <Styled.ErrorMessage
                      as={ErrorMessage}
                      name="symbol"
                      component="div"
                    />
                  </Styled.FieldWrapper>
                )}
              </Downshift>
              <div>
                <Styled.SubmitButton type="submit" disabled={isSubmitting}>
                  Track
                </Styled.SubmitButton>
              </div>
            </Styled.Form>
          )}
        </Formik>
      </SiteContent>
    );
  }
}

AddNewCompany.propTypes = {
  error: PropTypes.string,
  companiesSymbols: PropTypes.arrayOf(PropTypes.string),
  onAddCompany: PropTypes.func,
  onClearAddCompanyFailed: PropTypes.func,
};

const mapStateToProps = (state) => ({
  error: state.companies.error,
  companiesSymbols: state.companies.data.map((company) => company.symbol),
});

const mapDispatchToProps = {
  onAddCompany: addCompany,
  onClearAddCompanyFailed: clearAddCompanyFailed,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNewCompany)
);
