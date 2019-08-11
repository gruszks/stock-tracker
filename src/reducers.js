import { combineReducers } from 'redux';
import produce from 'immer';

import {
  ADD_COMPANY_DONE,
  DELETE_COMPANY,
  UPDATE_COMPANY_DONE,
  ADD_COMPANY_FAILED,
  CLEAR_ADD_COMPANY_FAILED,
} from 'actions';

const initialState = {
  data: [],
  error: null,
};

const companies = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_COMPANY_DONE:
        draft.data.push(action.company);
        draft.error = null;
        break;

      case ADD_COMPANY_FAILED:
        draft.error = action.error;
        break;

      case CLEAR_ADD_COMPANY_FAILED:
        draft.error = null;
        break;

      case DELETE_COMPANY:
        draft.data.splice(
          draft.data.findIndex((company) => company.symbol === action.symbol),
          1
        );
        break;

      case UPDATE_COMPANY_DONE:
        const company = draft.data.find(
          (company) => company.symbol === action.symbol
        );

        if (company) {
          Object.keys(action.data).forEach((key) => {
            company[key] = action.data[key];
          });
        }

        break;

      // no default
    }
  });

export default combineReducers({ companies });
