import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

import classes from './Burger.module.css';

const burger = props => {
  let ingredients = [];

  for (let [ingredient, amount] of Object.entries(props.ingredients)) {
    for (let i = 0; i < amount; i++) {
      ingredients.push(
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      );
    }
  }

  if (ingredients.length === 0)
    ingredients = <p>Start making your burger with the controls below.</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default burger;
