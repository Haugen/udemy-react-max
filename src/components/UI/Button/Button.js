import React from 'react';

const button = props => {
  let finalClasses = []
  if (props.classes) finalClasses = [...props.classes];

  return (
    <button
      onClick={props.click}
      className={finalClasses.join(' ')}>{props.children}</button>
  );
};

export default button;