import React from 'react';

import classes from './PageNotFound.module.css';

const pageNotFound = () => {
  return(
    <>
      <div className={classes.PageNotFound}>
        <h1>Page not found</h1>
        <p>Try another URL.</p>
      </div>
    </>
  );
}

export default pageNotFound;