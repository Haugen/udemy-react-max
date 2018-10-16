import React from 'react';

import styles from './index.module.css';

const person = props => {
  return (
    <div className={styles.Person}>
      <p>
        My name is {props.name} and I'm {props.age} years old.
      </p>
      <button onClick={props.deletePerson}>Delete person</button>
      <input onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
