import React, { Component } from 'react';

import Person from './Person/Person';

import styles from './persons.module.css';

class Persons extends Component {
  classes = [];

  addClasses() {
    if (this.props.persons.length < 3) {
      this.classes.push(styles.red);
    }
    if (this.props.persons.length < 2) {
      this.classes.push(styles.bold);
    }
  }

  render() {
    this.addClasses();
    console.log(this.props);

    return (
      <div>
        <div className={this.classes.join(' ')}>
          Number of people left: {this.props.persons.length}
        </div>
        {this.props.persons.map((person, i) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.props.changed(event, person.id)}
              deletePerson={() => this.props.delete(i)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
