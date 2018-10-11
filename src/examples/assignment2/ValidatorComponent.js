import React from 'react';
import Char from './CharComponent';

const ValidatorComponent = props => {

  let text = "Text too short!";

  if (props.state.displayTextLength > 5) {
    text = "Text long enought!";
  }

  return(
    <div className="validator-component">
      <p>Length: {props.state.displayTextLength}</p>
      <p><strong>{text}</strong></p>
      {props.state.displayText.split('').map((char, index) => {
        return <Char
          char={char}
          key={index}
          index={index}
          deleteLetterHandler={(index) => props.deleteLetterHandler(index)} />;
      })}
    </div>
  );
}

export default ValidatorComponent;