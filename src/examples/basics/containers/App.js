import React, { Component } from 'react';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';

import styles from '../index.module.css';

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Tobias', age: 32 },
      { id: '2', name: 'Anders', age: 32 },
      { id: '3', name: 'Fredrik', age: 30 }
    ],
    displayPersons: false,
    toggleClicks: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        displayPersons: !prevState.displayPersons,
        toggleClicks: prevState.toggleClicks + 1
      };
    });
  };

  showPersons = () => {
    this.setState({
      displayPersons: true
    });
  };

  handleAuthentication = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div className="toggle-persons">
          <Persons
            persons={this.state.persons}
            changed={this.changeNameHandler}
            delete={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit togglePersons={this.togglePersons} />
        <button onClick={this.handleAuthentication}>Authenticate</button>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withClass(App, 'app-wrapper');
