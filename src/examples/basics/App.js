import React, { Component } from 'react';
import Person from './Person';

import styles from './index.module.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Tobias', age: 32 },
      { id: '2', name: 'Anders', age: 32 },
      { id: '3', name: 'Fredrik', age: 30 }
    ],
    displayPersons: false
  };

  deletePersonHandler = personIndex => {
    // Using spread operator to get a new copy of the state, so we don't update
    // the state directly
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  changeNameHandler = (event, personId) => {
    // First finding the index of the person object we want to update.
    let personIndex = this.state.persons.findIndex(
      person => person.id === personId
    );
    // Creating a new object with the spread operator from the person object in
    // the state with our index.
    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // Getting all the persons from the state, and updating the person with out index
    // to our new person.
    let persons = [...this.state.persons];
    persons[personIndex] = person;

    // Then, just setting state.
    this.setState({
      persons: persons
    });
  };

  togglePersons = () => {
    this.setState({
      displayPersons: !this.state.displayPersons
    });
  };

  render() {
    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div className="toggle-persons">
          {this.state.persons.map((person, i) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.changeNameHandler(event, person.id)}
                deletePerson={() => this.deletePersonHandler(i)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <h1>A React app!</h1>
        <p>A paragraph from App.js</p>
        <button onClick={this.togglePersons}>Toggle persons!</button>
        {persons}
      </div>
    );
  }
}

export default App;
