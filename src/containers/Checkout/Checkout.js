import React from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

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
        {!this.props.ingredients ? (
          <Redirect to="/" />
        ) : this.props.inProgress ? (
          <Spinner />
        ) : (
          <>
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
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.bb.ingredients,
    inProgress: state.order.purchaseInProgress
  };
};

export default connect(mapStateToProps)(Checkout);
