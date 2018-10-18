import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const buildControls = props => {
  let controls = [];

  for (let [ingredient, amount] of Object.entries(props.ingredients)) {
    let ingredientLabel = ingredient[0].toLocaleUpperCase() + ingredient.substring(1);
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
      <p><strong>${props.totalPrice}</strong></p>
      {controls}
    </div>
  );
}

export default buildControls;