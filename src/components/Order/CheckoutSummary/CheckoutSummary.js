import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
  return(
    <div>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button click={'#'} classes={'btn btn-success mr-2 mb-2'}>Order burger!</Button>
      <Button click={'#'} classes={'btn btn-warning mb-2'}>Cancel checkout</Button>
    </div>
  );
}

export default checkoutSummary;