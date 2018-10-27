import React from 'react';

import Button from '../../../components/UI/Button/Button';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      ZIP: ''
    }
  };

  createOrderHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h2 className="mt-3">Enter your contact data</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="street">Street address</label>
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="Street address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP code</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="ZIP code"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the terms and conditions
            </label>
          </div>
          <Button
            click={this.createOrderHandler}
            classes="btn btn-success mt-3"
          >
            Order burger!
          </Button>
        </form>
      </>
    );
  }
}

export default ContactData;
