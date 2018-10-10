import React, { Component } from 'react';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Tobias', age: 32 },
      { name: 'Anders', age: 32 },
      { name: 'Fredrik', age: 30 },
    ]
  };

  switchNameHandler = (newName = "Default value?") => {
    console.log('Heyah!');
    this.setState({ persons: [
      { name: newName, age: 32 },
      { name: newName, age: 32 },
      { name: newName, age: 200 },
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>A React app!</h1>
        <button onClick={this.switchNameHandler.bind(this, "Default value works!")}>Change name!</button>
        <Person 
          key={this.state.persons.indexOf(this.state.persons[0])}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler()}
        />
        <Person 
          key={this.state.persons.indexOf(this.state.persons[1])}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "with new names!")}
        />
        <Person 
          key={this.state.persons.indexOf(this.state.persons[2])}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "And binding this.")}
        />
      </div>
    );
  }
}

export default App;
