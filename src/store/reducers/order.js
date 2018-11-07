import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  purchaseInProgress: false,
  purchaseSuccess: false,
  error: false
};

/**
 * The reducer, delegating actions to corresponding helper functions.
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchareBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, { purchaseInProgress: false });
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, { purchaseInProgress: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

const purchareBurgerSuccess = (state, action) => {
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
};

const fetchOrdersSuccess = (state, action) => {
  let orders = [];
  for (let [key, order] of Object.entries(action.payload.orders)) {
    orders.push({
      id: key,
      order: order
    });
  }

  return {
    ...state,
    error: false,
    orders: orders
  };
};

export default reducer;
