import React from 'react';
import classes from './Input.module.css';

function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} ref={ref} />
    </div>
  );
}

export default React.forwardRef(Input);
