import React from "react";
import "./styles.scss";

const InputFone = ({ onChange, name, value, label }) => {
  // Função para formatar o número de telefone ao entrar
  const handleMaskChange = (e: { target: { value: string } }) => {
    const unmaskedValue = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (unmaskedValue.length <= 11) {
      // Aplica a máscara para (99) 99999-9999
      const maskedValue = unmaskedValue.replace(
        /(\d{2})(\d{0,5})(\d{0,4})/,
        "($1) $2-$3"
      );
      onChange({ target: { name, value: maskedValue } });
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="container-field">
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={handleMaskChange} // Usamos a função handleMaskChange
          className="input"
        />
      </div>
    </div>
  );
};

export default InputFone;
