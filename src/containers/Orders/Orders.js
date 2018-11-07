import React from 'react';

import Order from '../../components/Order/Order';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';

class orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.userToken);
  }

  render() {
    let propsOrders = this.props.orders;
    let orders = <Spinner />;

    if (this.props.error) {
      orders = 'There was an error';
    } else if (propsOrders.length > 0) {
      orders = [];
      for (let i = 0; i < propsOrders.length; i++) {
        let curr = propsOrders[i];
        console.log(curr);
        orders.push(
          <Order
            key={curr.id}
            ingredients={curr.order.ingredients}
            price={curr.order.totalPrice}
          />
        );
      }
    }
    return (
      <>
        <h1>Your orders</h1>
        {orders}
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    orders: state.order.orders,
    error: state.order.error,
    userToken: state.auth.token
  };
};

const mapDispatchToProp = dispatch => {
  return {
    fetchOrders: token => dispatch(actionTypes.tryFetchOrders(token))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(WithErrorHandling(orders, axios));
