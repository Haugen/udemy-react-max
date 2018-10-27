import React from 'react';

const fullPost = props => {
  if (!props.post.title) var placeholder = <p>No post showing atm.</p>;

  return (
    <>
      <strong>
        <small>FULL POST</small>
      </strong>
      {placeholder}
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <hr />
    </>
  );
};

export default fullPost;
