import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.8
}

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.modal = 'hej';
  }

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 4.00,
    purchasing: false
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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    console.log('Lets continue!');
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
          <OrderSummary
            price={this.state.totalPrice.toFixed(2)}
            ingredients={this.state.ingredients}
            closeModal={this.purchaseCancelHandler}
            continueToCheckout={this.purchaseContinueHandler}
          />
        </Modal>
        <BuildControls
          ingredients={this.state.ingredients}
          orderBurger={this.purchaseHandler}
          adjustIngredient={this.adjustIngredientHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
        />
      </>
    )
  }
}

export default BurgerBuilder