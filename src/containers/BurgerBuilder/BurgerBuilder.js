import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.8
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 4.00
  }

  adjustIngredientHandler = (ingredient, action) => {
    let newIngredientState = {...this.state.ingredients};
    let totalPrice = this.state.totalPrice;

    if (action === 'add') {
      newIngredientState[ingredient]++;
      totalPrice = totalPrice + INGREDIENTS_PRICES[ingredient];
    } else if (action === 'remove' && this.state.ingredients[ingredient] > 0) {
      newIngredientState[ingredient]--;
      totalPrice = totalPrice - INGREDIENTS_PRICES[ingredient];
    }

    this.setState({
      ingredients: newIngredientState,
      totalPrice: totalPrice
    })
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          adjustIngredient={this.adjustIngredientHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
        />
      </>
    )
  }
}

export default BurgerBuilder