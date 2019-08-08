import { combineReducers } from 'redux';
import produce from 'immer';

const initialState = {
  isFetching: false,
  data: null,
};
const RECEIVE_PRODUCTS = 'tset';

const companies = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        action.products.forEach((product) => {
          draft[product.id] = product;
        });

      // no default
    }
  });

export default combineReducers({ companies });
