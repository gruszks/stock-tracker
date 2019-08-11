export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const UPDATE_COMPANY_DONE = 'UPDATE_COMPANY_DONE';
export const UPDATE_COMPANY_FAILED = 'UPDATE_COMPANY_FAILED';
export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_DONE = 'ADD_COMPANY_DONE';
export const ADD_COMPANY_FAILED = 'ADD_COMPANY_FAILED';
export const DELETE_COMPANY = 'DELETE_COMPANY';

export const updateCompany = (symbol) => ({
  type: UPDATE_COMPANY,
  symbol,
});

export const updateCompanyDone = (symbol, data) => ({
  type: UPDATE_COMPANY_DONE,
  symbol,
  data,
});

export const updateCompanyFailed = (symbol, error) => ({
  type: UPDATE_COMPANY_FAILED,
  symbol,
  error,
});

export const deleteCompany = (symbol) => ({
  type: DELETE_COMPANY,
  symbol,
});

export const addCompany = (
  symbol,
  data,
  onSuccessCallback,
  onFailureCallback
) => ({
  type: ADD_COMPANY,
  symbol,
  data,
  onSuccessCallback,
  onFailureCallback,
});

export const addCompanyDone = (company) => ({
  type: ADD_COMPANY_DONE,
  company,
});

export const addCompanyFailed = (error) => ({
  type: ADD_COMPANY_FAILED,
  error,
});
