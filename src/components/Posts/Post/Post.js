import React from 'react';

const post = props => {
  return(
    <>
      <div>
        <h5>{props.title}</h5>
        <p>{props.body}</p>
        <small>Author: {props.author}</small>
      </div>
      <hr />
    </>
  );
}

export default post;