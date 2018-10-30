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

  function initialState() {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = params[1];
    }
    return ingredients;
  }

  const [ingredients] = useState(initialState());

  return (
    <>
      <h1>Checkout</h1>
      <Summary
        checkoutCancele={checkoutCanceledHandler}
        checkoutProceed={checkoutProceedHandler}
        ingredients={ingredients}
      />
      <Route path={props.match.url + '/contact-data'} component={ContactData} />
    </>
  );
};

export default checkout;
