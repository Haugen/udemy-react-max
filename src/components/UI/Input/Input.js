import React from 'react';

const input = props => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.label}
        onChange={props.changed}
      />
    </>
  );
};

export default input;
