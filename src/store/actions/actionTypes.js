import { firebase as axios } from '../../util/Axios/Axios';

export const ADJUST_INGREDIENTS = 'ADJUST_INGREDIENTS';
export const SET_INITIAL_INGREDIENTS = 'SET_INITIAL_INGREDIENTS';

export const adjustIngredients = (ingredient, action) => {
  return {
    type: ADJUST_INGREDIENTS,
    payload: { ingredient, action }
  };
};

export const adjustIngredientsAsync = (ingredient, action) => {
  return dispatch => {
    dispatch(adjustIngredients(ingredient, action));
  };
};

export const setInitialIngredients = ingredients => {
  return {
    type: SET_INITIAL_INGREDIENTS,
    payload: { ingredients }
  };
};

export const getThenSetInitialIngredientsAsync = () => {
  return dispatch => {
    axios
      .get('/ingredients.json')
      .then(response => {
        dispatch(setInitialIngredients(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
