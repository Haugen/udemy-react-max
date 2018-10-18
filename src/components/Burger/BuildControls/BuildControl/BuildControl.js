import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = props => {
  let disabled = false;
  if (props.amount === 0) {
    disabled = true;
  }

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        disabled={disabled}
        onClick={() => props.adjustIngredient(props.ingredient, 'remove')}
        className={classes.Less}>
        Less
      </button>
      <button
        onClick={() => props.adjustIngredient(props.ingredient, 'add')}
        className={classes.More}>
        More
      </button>
    </div>
  )
};

export default buildControl;