import React from "react";
import "./form-input.styles.scss";

function FormInput({ input_type, value, name, onChangeHandler, label }) {
  return (
    <div className="group">
      <input
        className="form-input"
        type={input_type}
        value={value}
        name={name}
        onChange={onChangeHandler}
        alt={name}
        required
      />
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
