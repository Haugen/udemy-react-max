import React from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends React.Component {
  state = {
    ingredients: {}
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {}
    for (let params of query.entries()) {
      ingredients[params[0]] = params[1]
    }
    this.setState({ ingredients: ingredients });
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutProceedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return(
      <>
        <h1>Checkout</h1>
        <Summary
          checkoutCancele={this.checkoutCanceledHandler}
          checkoutProceed={this.checkoutProceedHandler}
          ingredients={this.state.ingredients} />
        <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
      </>
    )
  }
}

export default Checkout;
