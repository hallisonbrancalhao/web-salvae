import React from "react";
import "./styles.scss";

const InputField = ({ onChange, name, value, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="container-field">
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="input"
        />
      </div>
    </div>
  );
};

export default InputField;
