export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_COMPANY_DONE = 'FETCH_COMPANY_DONE';
export const FETCH_COMPANY_FAILED = 'FETCH_COMPANY_FAILED';
export const DELETE_COMPANY = 'DELETE_COMPANY';

export const fetchCompany = (id) => ({
  type: FETCH_COMPANY,
  id,
});

export const fetchCompanyDone = (data) => ({
  type: FETCH_COMPANY_DONE,
  data,
});

export const fetchCompanyFailed = (error) => ({
  type: FETCH_COMPANY_FAILED,
  error,
});

export const deleteCompany = (id) => ({
  type: DELETE_COMPANY,
  id,
});
