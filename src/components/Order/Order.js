import React from 'react';

import Burger from '../Burger/Burger';
import classes from './Order.module.css';

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
    <div className="row p-5">
      <div className="col-6">
        <h5>Ingredients</h5>
        <ul>{ingredients}</ul>
        <p>
          Total price: <strong>${props.price}</strong>
        </p>
      </div>
      <div className={classes.BurgerPreview + ' col-6'}>
        <Burger ingredients={props.ingredients} />
      </div>
      <hr />
    </div>
  );
};

export default order;
