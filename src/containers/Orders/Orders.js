import React, { useState, useEffect } from 'react';

import Order from '../../components/Order/Order';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';

const orders = () => {
  let displayOrders = [];
  const [orders, setOrders] = useState(<Spinner />);

  useEffect(() => {
    axios
      .get('orders.json')
      .then(response => {
        let orders = [];
        for (let [orderId, order] of Object.entries(response.data)) {
          orders.push({
            Id: orderId,
            ingredients: order.ingredients,
            price: order.totalPrice
          });
        }
        return orders;
      })
      .then(orders => {
        for (let i = 0; i < orders.length; i++) {
          displayOrders.push(
            <Order
              key={orders[i].Id}
              ingredients={orders[i].ingredients}
              price={orders[i].price}
            />
          );
        }
        setOrders(displayOrders);
      })
      .catch(err => {
        console.log(err);
      });
  }, {});

  return (
    <>
      <h1>Your orders</h1>
      {orders}
    </>
  );
};

export default WithErrorHandling(orders, axios);
