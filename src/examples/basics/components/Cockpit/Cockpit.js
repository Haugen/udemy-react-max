import React from 'react';
//import Aux from '../../hoc/Aux';

const Cockpit = props => {
  return (
    <>
      <h1>A React app!</h1>
      <p>A paragraph from App.js</p>
      <button onClick={props.togglePersons}>Toggle persons!</button>
    </>
  );
};

export default Cockpit;
