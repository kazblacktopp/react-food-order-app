import React from 'react';

function Input(props, ref) {
  const { classes, id, label, hasError, ...remainingProps } = props;

  return (
    <div className={classes.divClass}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...remainingProps} ref={ref} />
      {hasError && (
        <p className={classes.errorClass}>Please enter a valid {id}.</p>
      )}
    </div>
  );
}

export default React.forwardRef(Input);
