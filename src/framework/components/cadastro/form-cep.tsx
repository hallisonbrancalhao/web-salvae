import React from "react";
import InputMask from "react-input-mask";
import "./styles.scss";

const InputCep = ({ onChange, name, value, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="container-field">
        <InputMask
          mask="99999-999"
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

export default InputCep;
