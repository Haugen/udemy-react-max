import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.8
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4.0,
    purchasing: false,
    purchaseInProgress: false,
    error: false
  };

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  adjustIngredientHandler = (ingredient, action) => {
    let newIngredientState = { ...this.state.ingredients };
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
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    let queryParams = [];
    for (let [ingredient, amount] of Object.entries(this.state.ingredients)) {
      queryParams.push(
        encodeURIComponent(ingredient) + '=' + encodeURIComponent(amount)
      );
    }
    queryParams.push('totalPrice=' + this.state.totalPrice.toFixed(2));

    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryParams.join('&')}`
    });
  };

  render() {
    let checkoutDisplay;

    if (this.state.purchaseInProgress || !this.state.ingredients) {
      checkoutDisplay = <Spinner />;
    } else {
      checkoutDisplay = (
        <OrderSummary
          price={this.state.totalPrice.toFixed(2)}
          ingredients={this.state.ingredients}
          closeModal={this.purchaseCancelHandler}
          continueToCheckout={this.purchaseContinueHandler}
        />
      );
    }

    let burger = this.state.error ? (
      <p style={{ textAlign: 'center' }}>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredients={this.state.ingredients}
            orderBurger={this.purchaseHandler}
            adjustIngredient={this.adjustIngredientHandler}
            totalPrice={this.state.totalPrice.toFixed(2)}
          />
        </>
      );
    }

    return (
      <>
        {burger}
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          {checkoutDisplay}
        </Modal>
      </>
    );
  }
}

export default withErrorHandling(BurgerBuilder, axios);
