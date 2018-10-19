import React from 'react';

import classes from './Modal.module.css';

const modal = props => {
  let finalClasses = [classes.Modal];
  // if (props.show) finalClasses.push(classes.Show);

  return (
    <div className={finalClasses.join(' ')} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      {props.children}
    </div>
  );
};

export default modal;