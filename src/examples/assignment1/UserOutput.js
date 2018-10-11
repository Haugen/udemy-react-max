import React from 'react';

const UserOutput = props => {
  return(
    <div className="user-output">
      <p>A paragraph for User Output with name {props.name}!</p>
      <p>And another paragraph!</p>
    </div>
  );
}

export default UserOutput;