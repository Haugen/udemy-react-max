import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    if (!this.props.ingredients) {
      this.props.onGetThenSetInitialIngredientsAsync();
    }
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    let checkoutDisplay;

    if (!this.props.ingredients) {
      checkoutDisplay = <Spinner />;
    } else {
      checkoutDisplay = (
        <OrderSummary
          price={this.props.totalPrice.toFixed(2)}
          ingredients={this.props.ingredients}
          closeModal={this.purchaseCancelHandler}
          continueToCheckout={this.purchaseContinueHandler}
        />
      );
    }

    let burger = <Spinner />;

    if (this.props.error) {
      burger = 'An error occured. Sorry!';
    }

    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredients={this.props.ingredients}
            orderBurger={this.purchaseHandler}
            adjustIngredient={this.props.onAdjustIngredientHandler}
            totalPrice={this.props.totalPrice.toFixed(2)}
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

const mapStateToProps = state => ({
  totalPrice: state.totalPrice,
  ingredients: state.ingredients,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  onAdjustIngredientHandler: (ingredient, action) =>
    dispatch(actionCreators.adjustIngredients(ingredient, action)),
  onGetThenSetInitialIngredientsAsync: () => {
    dispatch(actionCreators.getThenSetInitialIngredientsAsync());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandling(BurgerBuilder, axios));
