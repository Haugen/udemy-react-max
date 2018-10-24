import React from 'react';

import classes from './PageNotFound.module.css';
import { Redirect } from 'react-router-dom';

class pageNotFound extends React.Component {
  REDIRECT_IN = 10;

  state = {
    redirect: false,
    seconds: this.REDIRECT_IN
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, this.REDIRECT_IN * 1000);

    this.interval = setInterval(() => {
      this.setState((state) => { return { seconds: state.seconds - 1 } });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let redirect = null;
    let seconds = this.state.seconds;

    if (this.state.redirect) {
      redirect = <Redirect to='/' />
    }

    return(
      <>
        <div className={classes.PageNotFound}>
          <h1>Page not found</h1>
          <p>You are being redirected in {seconds} seconds</p>
          {redirect}
        </div>
      </>
    );
  }
}

export default pageNotFound;