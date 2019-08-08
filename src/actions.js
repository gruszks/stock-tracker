export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_COMPANY_DONE = 'FETCH_COMPANY_DONE';
export const FETCH_COMPANY_FAILED = 'FETCH_COMPANY_FAILED';
export const ADD_COMPANY = 'ADD_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';

export const fetchCompany = (symbol) => ({
  type: FETCH_COMPANY,
  symbol,
});

export const fetchCompanyDone = (data) => ({
  type: FETCH_COMPANY_DONE,
  data,
});

export const fetchCompanyFailed = (error) => ({
  type: FETCH_COMPANY_FAILED,
  error,
});

export const deleteCompany = (symbol) => ({
  type: DELETE_COMPANY,
  symbol,
});

export const addCompany = (symbol, data) => ({
  type: ADD_COMPANY,
  symbol,
  data,
});
