import React from 'react';
import './styles.scss';

const InputCnpj = ({ onChange, name, value, label }) => {
  // Função para formatar o CNPJ ao entrar
  const handleMaskChange = (e: { target: { value: string; }; }) => {
    const unmaskedValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (unmaskedValue.length <= 14) {
      // Aplica a máscara 99.999.999/9999-99
      const maskedValue = unmaskedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      onChange({ target: { name, value: maskedValue } });
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="container">
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

export default InputCnpj;
