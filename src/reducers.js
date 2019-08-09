import { combineReducers } from 'redux';
import produce from 'immer';

import { ADD_COMPANY_DONE, DELETE_COMPANY } from 'actions';

const initialState = {
  selected: [],
};

const companies = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_COMPANY_DONE:
        draft.selected.push(action.company);
        break;

      case DELETE_COMPANY:
        draft.selected.splice(
          draft.selected.findIndex(
            (company) => company.symbol === action.symbol
          ),
          1
        );
        break;

      // no default
    }
  });

export default combineReducers({ companies });
