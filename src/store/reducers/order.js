import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return state;
    case actionTypes.PURCHASE_BURGER_FAIL:
      return state;
    default:
      return state;
  }
};

export default reducer;
