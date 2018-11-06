import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions/index';

class Auth extends React.Component {
  state = {
    email: { id: 'email', value: '' },
    password: { id: 'password', value: '' }
  };

  handleSignup = e => {
    e.preventDefault();

    let email = this.state.email.value;
    let password = this.state.password.value;

    this.props.onSignup(email, password);
  };

  onChangeHandler = (e, field) => {
    this.setState({
      [field]: { id: field, value: e.target.value }
    });
  };

  render() {
    return (
      <>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSignup}>
          <div className="form-group">
            <Input
              changed={event =>
                this.onChangeHandler(event, this.state.email.id)
              }
              type="email"
              id="email"
              label="Email address"
            />
          </div>
          <div className="form-group">
            <Input
              changed={event =>
                this.onChangeHandler(event, this.state.password.id)
              }
              type="password"
              id="password"
              label="Password"
            />
          </div>
          <Button classes="btn btn-primary">Sign up</Button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignup: (email, password) =>
      dispatch(actionCreators.auth(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
