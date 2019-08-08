import { combineReducers } from 'redux';
import produce from 'immer';

import { ADD_COMPANY, DELETE_COMPANY } from 'actions';

const initialState = {
  selected: {},
};

const companies = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_COMPANY:
        draft.selected[action.symbol] = action.data;
        break;

      case DELETE_COMPANY:
        delete draft.selected[action.symbol];
        break;

      // no default
    }
  });

export default combineReducers({ companies });
