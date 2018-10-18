import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = props => {
  let ingredients = [];

  for (let [ingredient, amount] of Object.entries(props.ingredients)) {
    for (let i = 0; i < amount; i++) {
      ingredients.push(<BurgerIngredient key={ingredient+i} type={ingredient} />);
    }
  };

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;