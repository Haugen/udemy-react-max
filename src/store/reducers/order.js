import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  purchaseInProgress: false,
  purchaseSuccess: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.orderId.name
      };

      return {
        ...state,
        purchaseInProgress: false,
        purchaseSuccess: true,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        purchaseInProgress: false
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        purchaseInProgress: true
      };
    default:
      return state;
  }
};

export default reducer;
