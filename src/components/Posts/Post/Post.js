import React from 'react';

import classes from './Post.module.css';
import { withRouter } from 'react-router-dom';

const post = props => {
  return(
    <>
      <div className={classes.Post}>
        {/* <Link to={props.match.url + `/${props.id}`}> */}
          <h5 onClick={() => props.changeFullPost(props.id)}>{props.title}</h5>
        {/* </Link> */}
        <small>Author: {props.author}</small>
      </div>
      <hr />
    </>
  );
}

export default withRouter(post);