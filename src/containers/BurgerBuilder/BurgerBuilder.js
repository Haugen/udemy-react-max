import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Posts from '../../components/Posts/Posts';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';

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
    totalPrice: 4.00,
    purchasing: false,
    purchaseInProgress: false,
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
    this.setState({ purchaseInProgress: true });

    axios.post('/orders.json', {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Tobias Haugen',
        address: {
          stret: 'Lindholmsallén 53',
          zip: '417 53',
          city: 'Gothenburg',
          country: 'Sweden'
        },
        email: 'tobiashaugen@gmail.com'
      },
      deliveryMethod: 'fastest'
    })
      .then(response => {
        console.log(response);
        this.setState({ 
          purchaseInProgress: false,
          purchasing: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          purchaseInProgress: false,
          purchasing: false
        });
      })
  }

  render() {
    let checkoutDisplay;

    if (this.state.purchaseInProgress) {
      checkoutDisplay = <Spinner />;
    } else {
      checkoutDisplay = <OrderSummary
        price={this.state.totalPrice.toFixed(2)}
        ingredients={this.state.ingredients}
        closeModal={this.purchaseCancelHandler}
        continueToCheckout={this.purchaseContinueHandler}
      />;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <Modal 
          show={this.state.purchasing} 
          closeModal={this.purchaseCancelHandler}>
            {checkoutDisplay}
        </Modal>
        <BuildControls
          ingredients={this.state.ingredients}
          orderBurger={this.purchaseHandler}
          adjustIngredient={this.adjustIngredientHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
        />
        <Posts />
      </>
    )
  }
}

export default withErrorHandling(BurgerBuilder, axios);