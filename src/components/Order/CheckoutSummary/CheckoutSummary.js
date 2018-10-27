import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
  return (
    <div>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        click={props.checkoutProceed}
        classes={'btn btn-success mr-2 mb-2'}
      >
        Looks good? Continue with order
      </Button>{' '}
      or &nbsp;
      <Button click={props.checkoutCancele} classes={'btn btn-warning mb-2'}>
        Cancel checkout
      </Button>
    </div>
  );
};

export default checkoutSummary;
