import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  
  const focus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus
    }
  })
  return (
    <div
      className={`${classes.control} ${props.isValid ? "" : classes.invalid}`}
    >
      <label htmlFor={props.id}>{props.field}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
