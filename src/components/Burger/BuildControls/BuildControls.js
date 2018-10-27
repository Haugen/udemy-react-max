import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const buildControls = props => {
  let controls = [];
  let buttonDisabled = true;

  for (let [ingredient, amount] of Object.entries(props.ingredients)) {
    let ingredientLabel =
      ingredient[0].toLocaleUpperCase() + ingredient.substring(1);
    if (buttonDisabled && amount > 0) buttonDisabled = false;

    controls.push(
      <BuildControl
        adjustIngredient={props.adjustIngredient}
        key={ingredient}
        label={ingredientLabel}
        ingredient={ingredient}
        amount={amount}
      />
    );
  }

  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>${props.totalPrice}</strong>
      </p>
      {controls}
      <button
        disabled={buttonDisabled}
        onClick={props.orderBurger}
        className={classes.OrderButton}
      >
        Order your burger!
      </button>
    </div>
  );
};

export default buildControls;
