import React from 'react';

const UserInput = props => {
  let color = 'red'

  if (props.name.length > 5) {
    color = 'green';
  }
  
  const inputStyles = {
    border: `1px solid ${color}`
  }

  inputStyles.padding = '10px';
  inputStyles.backgroundColor = color;

  return(
    <div className="user-output">
      Input text: <input style={inputStyles} type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default UserInput;