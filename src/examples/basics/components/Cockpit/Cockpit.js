import React from 'react';

const Cockpit = props => {
  return (
    <div className="cockpit">
      <h1>A React app!</h1>
      <p>A paragraph from App.js</p>
      <button onClick={props.togglePersons}>Toggle persons!</button>
    </div>
  );
};

export default Cockpit;
