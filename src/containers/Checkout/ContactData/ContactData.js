import React from 'react';

import Button from '../../../components/UI/Button/Button';
import { firebase as axios } from '../../../util/Axios/Axios';
import Input from '../../../components/UI/Input/Input';
import { cloneDeep } from 'lodash';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import WithErrorHandling from '../../../util/WithErrorHandling/WithErrorHandling';

class ContactData extends React.Component {
  state = {
    customer: {
      name: { id: 'name', value: '' },
      email: { id: 'email', value: '' },
      street: { id: 'street', value: '' },
      zip: { id: 'zip', value: '' },
      city: { id: 'city', value: '' },
      deliveryMethod: { id: 'deliveryMethod', value: 'fastest' }
    }
  };

  componentDidMount() {
    if (this.props.purchaseSuccess) {
      this.props.history.push('/');
    }
  }

  createOrderHandler = event => {
    event.preventDefault();

    let order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice.toFixed(2),
      customer: {
        name: this.state.customer.name.value,
        address: {
          street: this.state.customer.street.value,
          zip: this.state.customer.zip.value,
          city: this.state.customer.city.value
        },
        email: this.state.customer.email.value
      },
      deliveryMethod: this.state.customer.deliveryMethod.value
    };

    this.props.onTryPurchaseBurger(order);
  };

  onChangeHandler = (event, id) => {
    const newState = cloneDeep(this.state);
    newState.customer[id].value = event.target.value;
    this.setState(newState);
  };

  render() {
    let form = (
      <form onSubmit={this.createOrderHandler}>
        <div className="form-group">
          <Input
            changed={event =>
              this.onChangeHandler(event, this.state.customer.name.id)
            }
            type="text"
            id="name"
            label="Your name"
          />
        </div>
        <div className="form-group">
          <Input
            changed={event =>
              this.onChangeHandler(event, this.state.customer.email.id)
            }
            type="email"
            id="email"
            label="Email address"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <Input
            changed={event =>
              this.onChangeHandler(event, this.state.customer.street.id)
            }
            type="text"
            id="street"
            label="Street address"
          />
        </div>
        <div className="form-group">
          <Input
            changed={event =>
              this.onChangeHandler(event, this.state.customer.zip.id)
            }
            type="text"
            id="zip"
            label="ZIP code"
          />
        </div>
        <div className="form-group">
          <Input
            changed={event =>
              this.onChangeHandler(event, this.state.customer.city.id)
            }
            type="text"
            id="city"
            label="City"
          />
        </div>
        <div className="form-group">
          <label htmlFor="delivery">Delivery method</label>
          <select
            onChange={event =>
              this.onChangeHandler(event, this.state.customer.deliveryMethod.id)
            }
            className="form-control"
            id="delivery"
          >
            <option value="fastest">Fastest</option>
            <option value="cheapest">Cheapest</option>
          </select>
        </div>
        <Button classes="btn btn-success mt-3">Order burger!</Button>
      </form>
    );

    return (
      <>
        <h2 className="mt-3">Enter your contact data</h2>
        {form}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.bb.ingredients,
    totalPrice: state.bb.totalPrice,
    purchaseSuccess: state.order.purchaseSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetThenSetInitialIngredientsAsync: () => {
      dispatch(actionCreators.getThenSetInitialIngredientsAsync());
    },
    onTryPurchaseBurger: order => {
      dispatch(actionCreators.tryPurchaseBurger(order));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandling(ContactData, axios));
