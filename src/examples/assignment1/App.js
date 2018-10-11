import React, {Component} from 'react';
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
    fontSize: '30px'
  }

  render() {
    return(
      <div className="app">
        <h1 style={this.styles}>Some heading</h1>
        <UserInput name={this.state.userName} changed={this.nameChangedHandler} />
        <UserOutput name={this.state.userName} />
        <UserOutput name="Anders" />
        <UserOutput name="Jonas" />
      </div>
    );
  };
}

export default App;