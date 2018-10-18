import React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 2,
      bacon: 2
    }
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </>
    )
  }
}

export default BurgerBuilder