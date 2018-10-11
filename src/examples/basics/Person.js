import React from 'react';

let test = [1, 2, 3];
test = test.map(num => num * 2);
test = test.filter(num => num < 5);
test = test.reduce((sum, curr) => sum + curr);

const person = props => {
  return (
    <div className="person">
      <p>A nice paragraph with some array methods working out a number: {test}.</p>
      <p>My name is {props.name} and I'm {props.age} years old.</p>
      <button onClick={props.click}>Click me!</button>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
      {props.children}
    </div>
  );
};

export default person;