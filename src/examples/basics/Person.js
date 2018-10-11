import React from 'react';

const person = props => {
  return (
    <div className="person">
      <p>
        My name is {props.name} and I'm {props.age} years old.
      </p>
      <button onClick={props.deletePerson}>Delete person</button>
      <input onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
