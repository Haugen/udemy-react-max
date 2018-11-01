import React from 'react';

import Button from '../../../components/UI/Button/Button';
import { firebase as axios } from '../../../util/Axios/Axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { cloneDeep } from 'lodash';

class ContactData extends React.Component {
  state = {
    customer: {
      name: { id: 'name', value: '' },
      email: { id: 'email', value: '' },
      street: { id: 'street', value: '' },
      zip: { id: 'zip', value: '' },
      city: { id: 'city', value: '' },
      deliveryMethod: { id: 'deliveryMethod', value: 'fastest' }
    },
    purchaseInProgress: false
  };

  createOrderHandler = event => {
    event.preventDefault();
    this.setState({ purchaseInProgress: true });

    axios
      .post('/orders.json', {
        ingredients: this.props.ingredients,
        totalPrice: this.props.totalPrice,
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
      })
      .then(() => {
        this.setState({
          purchaseInProgress: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({
          purchaseInProgress: false
        });
      });
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

    if (this.state.purchaseInProgress) {
      form = <Spinner />;
    }
    return (
      <>
        <h2 className="mt-3">Enter your contact data</h2>
        {form}
      </>
    );
  }
}

export default ContactData;
