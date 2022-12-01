import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input {...props} ref={ref} />
    </div>
  );
});

export default Input;
