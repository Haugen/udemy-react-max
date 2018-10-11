import React, {Component} from 'react';
import Comp from './comp';

class App extends Component {
  render() {
    return(
      <div className="app">
        <h1>Some value</h1>
        <Comp />
        <Comp />
      </div>
    );
  };
}

export default App;