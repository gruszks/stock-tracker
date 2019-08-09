import { combineReducers } from 'redux';
import produce from 'immer';

import { ADD_COMPANY_DONE, DELETE_COMPANY } from 'actions';

const initialState = {
  data: [],
};

const companies = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_COMPANY_DONE:
        draft.data.push(action.company);
        break;

      case DELETE_COMPANY:
        draft.data.splice(
          draft.data.findIndex((company) => company.symbol === action.symbol),
          1
        );
        break;

      // no default
    }
  });

export default combineReducers({ companies });
