import React from 'react';

import classes from './Post.module.css';

const post = props => {
  return(
    <>
      <div className={classes.Post}>
        <h5 onClick={() => props.changeFullPost(props.id)}>{props.title}</h5>
        <small>Author: {props.author}</small>
      </div>
      <hr />
    </>
  );
}

export default post;