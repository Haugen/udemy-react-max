import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  purchaseInProgress: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.orderId
      };
      console.log(state);
      console.log(newOrder);
      return {
        ...state,
        purchaseInProgress: false,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return state;
    default:
      return state;
  }
};

export default reducer;
