import React from 'react';

const order = props => {
  let ingredients = [];

  if (props.ingredients) {
    for (let [ingredient, amount] of Object.entries(props.ingredients)) {
      ingredients.push(
        <li style={{ textTransform: 'capitalize' }} key={ingredient}>
          {ingredient}: {amount}
        </li>
      );
    }
  }

  return (
    <div>
      <h5>Ingredients</h5>
      <ul>{ingredients}</ul>
      <p>
        Total price: <strong>${props.price}</strong>
      </p>
      <hr />
    </div>
  );
};

export default order;
