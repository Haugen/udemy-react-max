import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4.0,
  error: false
};

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.8
};

function adjustIngredientsHelper(state, action) {
  let newIngredients = { ...state.ingredients };
  let totalPrice = state.totalPrice;
  let ingredient = action.payload.ingredient;

  if (action.payload.action === 'add') {
    newIngredients[ingredient]++;
    totalPrice = totalPrice + INGREDIENTS_PRICES[ingredient];
  } else if (
    action.payload.action === 'remove' &&
    state.ingredients[ingredient] > 0
  ) {
    newIngredients[ingredient]--;
    totalPrice = totalPrice - INGREDIENTS_PRICES[ingredient];
  }

  return updateObject(state, {
    ingredients: newIngredients,
    totalPrice: totalPrice
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INITIAL_INGREDIENTS:
      return updateObject(state, {
        ingredients: action.payload.ingredients,
        error: false
      });
    case actionTypes.ADJUST_INGREDIENTS:
      return adjustIngredientsHelper(state, action);
    case actionTypes.FETCH_INGREDIENTS_ERROR:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
