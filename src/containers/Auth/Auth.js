import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends React.Component {
  state = {
    email: { id: 'email', value: '' },
    password: { id: 'password', value: '' },
    isSignup: false
  };

  handleAuth = e => {
    e.preventDefault();

    let email = this.state.email.value;
    let password = this.state.password.value;
    let method = this.state.isSignup ? 'signup' : 'login';

    this.props.onAuth(email, password, method);
  };

  onChangeHandler = (e, field) => {
    this.setState({
      [field]: { id: field, value: e.target.value }
    });
  };

  switchAuthForm = e => {
    e.preventDefault();
    this.setState(state => ({
      isSignup: !state.isSignup
    }));
  };

  render() {
    let currLabel = 'Sign up';
    let nextLabel = 'Sign in';
    let helpText = 'Already have an account? ';

    if (!this.state.isSignup) {
      [currLabel, nextLabel] = [nextLabel, currLabel];
      helpText = "Don't yet have an account? ";
    }

    return (
      <>
        <h1>{currLabel}</h1>
        {this.props.error && (
          <div className="alert alert-warning">{this.props.error.message}</div>
        )}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <form>
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
              <Button click={this.handleAuth} classes="btn btn-primary">
                {currLabel}
              </Button>
            </form>

            <p>
              {helpText}
              <Button click={this.switchAuthForm} classes="btn btn-secondary">
                {nextLabel}
              </Button>
            </p>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, method) =>
      dispatch(actionCreators.auth(email, password, method))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
