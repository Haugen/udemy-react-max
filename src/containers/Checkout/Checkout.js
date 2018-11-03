import React from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends React.Component {
  checkoutCanceledHandler() {
    this.props.history.goBack();
  }

  checkoutProceedHandler() {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <>
        <h1>Checkout</h1>
        <Summary
          checkoutCancele={() => this.checkoutCanceledHandler()}
          checkoutProceed={() => this.checkoutProceedHandler()}
          ingredients={this.props.ingredients}
        />
        <Route
          path={this.props.match.url + '/contact-data'}
          component={ContactData}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.bb.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
