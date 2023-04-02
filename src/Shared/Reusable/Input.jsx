import React, { Fragment } from "react";
import "./style.scss";

function Input({
  label,
  className,
  onChange,
  onBlur,
  max,
  min,
  isError,
  value,
  type,
  name,
  placeholder,
  errorMsg,
}) {
  return (
    <Fragment>
      <div className="form__container">
        <label>
          {label}
          {isError ? <div className="require">{isError}</div> : null}
        </label>

        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
          min={min}
          max={max}
        />
      </div>
      {/* {<span className="error__msg__col">{errorMsg}</span>} */}
    </Fragment>
  );
}

export default Input;
