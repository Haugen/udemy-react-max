import React from 'react';

const CharComponent = props => {
  let styles = {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    margin: '10px',
    border: '1px solid red',
    cursor: 'pointer'
  };

  return (
    <div
      onClick={() => props.deleteLetterHandler(props.index)}
      style={styles}
      className="char"
    >
      {props.char}
    </div>
  );
};

export default CharComponent;
