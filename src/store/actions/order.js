import { firebase as axios } from '../../util/Axios/Axios';
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload: { orderId, orderData }
  };
};

export const purchaseBurgerFail = () => {};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const tryPurchaseBurger = (order, token = null) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json?auth=' + token, order)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data, order));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail());
      });
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    payload: { orders }
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    payload: { error }
  };
};

export const tryFetchOrders = (token, userId) => {
  return dispatch => {
    axios
      .get(
        'orders.json?orderBy="customer/userId"&equalTo="' +
          userId +
          '"&auth=' +
          token
      )
      .then(response => {
        console.log(response.data);
        dispatch(fetchOrdersSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
