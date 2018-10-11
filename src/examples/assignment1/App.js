import React, { Component } from 'react';
import Radium from 'radium';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

import './index.css';

class App extends Component {
  state = {
    userName: "Tobias"
  }

  nameChangedHandler = event => {
    this.setState({
      userName: event.target.value
    })
  }

  styles = {
    color: 'pink',
    fontSize: '30px',
    // Radium lets us add hover states in here.
    ':hover': {
      fontWeight: 'bold',
      color: 'red'
    },
    // For media queries, we need to wrap the whole app in <StyleRoot>
    '@media (min-width: 500px)': {
      background: 'lightgreen'
    }
  }

  render() {
    const classNames = [];
    if (this.state.userName.length <= 3) {
      classNames.push('red');
    }
    if (this.state.userName.length <= 2) {
      classNames.push('bold');
    }

    return(
      <div className="app">
        <h1 style={this.styles}>Some heading</h1>
        <p className={classNames.join(' ')}>Some text!</p>
        <UserInput name={this.state.userName} changed={this.nameChangedHandler} />
        <UserOutput name={this.state.userName} />
      </div>
    );
  };
}

// Radium as a higher order function.
export default Radium(App);