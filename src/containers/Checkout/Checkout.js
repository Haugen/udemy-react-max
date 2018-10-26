import React from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
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
          ingredients={{}} />
      </>
    )
  }
}

export default Checkout;
