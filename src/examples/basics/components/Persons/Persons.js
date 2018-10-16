import React from 'react';

import Person from './Person/Person';

import styles from './persons.module.css';

const Persons = props => {
  console.log(props.persons.length);
  let classes = [];

  if (props.persons.length < 3) {
    classes.push(styles.red);
  }
  if (props.persons.length < 2) {
    classes.push(styles.bold);
  }

  return (
    <div>
      <div className={classes.join(' ')}>
        Number of people left: {props.persons.length}
      </div>
      {props.persons.map((person, i) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => props.changed(event, person.id)}
            deletePerson={() => props.delete(i)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
