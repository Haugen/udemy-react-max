import React, { useState } from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

const checkout = props => {
  function checkoutCanceledHandler() {
    props.history.goBack();
  }

  function checkoutProceedHandler() {
    props.history.replace('/checkout/contact-data');
  }

  function getIngredients() {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      if (params[0] === 'totalPrice') continue;
      ingredients[params[0]] = params[1];
    }
    return ingredients;
  }

  function getPrice() {
    const query = new URLSearchParams(props.location.search);
    let totalPrice = 0;
    for (let params of query.entries()) {
      if (params[0] === 'totalPrice') {
        totalPrice = params[1];
      }
    }
    return totalPrice;
  }

  const [ingredients] = useState(getIngredients());
  const [totalPrice] = useState(getPrice());

  return (
    <>
      <h1>Checkout</h1>
      <Summary
        checkoutCancele={checkoutCanceledHandler}
        checkoutProceed={checkoutProceedHandler}
        ingredients={ingredients}
      />
      <Route
        path={props.match.url + '/contact-data'}
        render={props => (
          <ContactData
            ingredients={ingredients}
            totalPrice={totalPrice}
            {...props}
          />
        )}
      />
    </>
  );
};

export default checkout;
