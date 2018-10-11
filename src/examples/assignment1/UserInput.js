import React from 'react';

const UserInput = props => {
  const inputStyles = {
    border: '1px solid red'
  }

  return(
    <div className="user-output">
      Input text: <input style={inputStyles} type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default UserInput;