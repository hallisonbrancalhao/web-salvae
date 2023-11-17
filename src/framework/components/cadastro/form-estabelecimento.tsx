import React from "react";
import "./styles.scss";
import { IEstabelecimento } from "@/core/base/types/estabelecimento-create.interface";

const SelectEstabelecimento = ({ onChange, name, value, label, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="container-field">
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="input"
        >
          {options.map((option: IEstabelecimento) => (
            <option key={option.id} value={option.id}>
              {option.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectEstabelecimento;
