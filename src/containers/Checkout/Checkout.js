import React from 'react';

import Summary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  render() {
    return(
      <>
        <h1>Checkout</h1>
        <Summary ingredients={{}} />
      </>
    )
  }
}

export default Checkout;
