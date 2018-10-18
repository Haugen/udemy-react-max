import React, { Component } from 'react';

import Person from './Person/Person';
import withClass from '../../hoc/withClass';

import styles from './persons.module.css';

class Persons extends Component {
  classes = [];

  addClasses() {
    if (this.props.persons.length < 3) {
      if (!this.classes.includes(styles.red)) this.classes.push(styles.red);
    }
    if (this.props.persons.length < 2) {
      if (!this.classes.includes(styles.bold)) this.classes.push(styles.bold);
    }
  }

  render() {
    this.addClasses();

    return (
      <>
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
      </>
    );
  }
}

export default withClass(Persons, 'test-class');
