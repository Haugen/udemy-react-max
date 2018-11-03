import { firebase as axios } from '../../util/Axios/Axios';
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload: { orderId, orderData }
  };
};

export const purchaseBurgerFail = () => {};

export const tryPurchaseBurger = order => {
  return dispatch => {
    axios
      .post('/orders.json', order)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data, order));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail());
      });
  };
};
