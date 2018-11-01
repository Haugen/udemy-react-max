import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4.0
};

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.8
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADJUST_INGREDIENTS:
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
      return {
        ...state,
        ingredients: newIngredients,
        totalPrice: totalPrice
      };

    default:
      return state;
  }
};

export default reducer;
