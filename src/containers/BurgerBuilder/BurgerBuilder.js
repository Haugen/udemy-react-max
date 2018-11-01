import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { firebase as axios } from '../../util/Axios/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false,
    purchaseInProgress: false,
    error: false
  };

  // componentDidMount() {
  //   axios
  //     .get('/ingredients.json')
  //     .then(response => {
  //       this.setState({ ingredients: response.data });
  //     })
  //     .catch(error => {
  //       this.setState({ error: true });
  //     });
  // }

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

    if (this.state.purchaseInProgress || !this.props.ingredients) {
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

    let burger = this.state.error ? (
      <p style={{ textAlign: 'center' }}>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

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
  ingredients: state.ingredients
});

const mapDispatchToProps = dispatch => ({
  onAdjustIngredientHandler: (ingredient, action) =>
    dispatch({
      type: actionTypes.ADJUST_INGREDIENTS,
      payload: { ingredient, action }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandling(BurgerBuilder, axios));
