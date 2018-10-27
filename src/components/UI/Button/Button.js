import React from 'react';

const button = props => {
  return (
    <button onClick={props.click} className={props.classes}>
      {props.children}
    </button>
  );
};

export default button;
