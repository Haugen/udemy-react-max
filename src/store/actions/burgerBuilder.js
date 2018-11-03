import { firebase as axios } from '../../util/Axios/Axios';
import * as actionTypes from './actionTypes';

export const adjustIngredients = (ingredient, action) => {
  return {
    type: actionTypes.ADJUST_INGREDIENTS,
    payload: { ingredient, action }
  };
};
export const setInitialIngredients = ingredients => {
  return {
    type: actionTypes.SET_INITIAL_INGREDIENTS,
    payload: { ingredients }
  };
};

export const fetchIngredientsError = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_ERROR
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
        dispatch(fetchIngredientsError());
      });
  };
};
