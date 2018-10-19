import React from 'react';

const orderSummary = props => {
  const ingredientsList = Object.entries(props.ingredients)
    .map(ingredient => {
      return <li key={ingredient[0]}>
        <span style={{textTransform: 'capitalize'}}>{ingredient[0]}</span>:&nbsp;
        {ingredient[1]}</li>
    });

  return (
    <>
      <h3>Your order!</h3>
      <p>What a nice burger. These are the ingredients you choose:</p>
      <ul>{ingredientsList}</ul>
      <p>Your total will be <strong>${props.price}</strong>.</p>
      <button>Proceed to checkout</button>
    </>
  );
}

export default orderSummary;