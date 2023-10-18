import React from 'react';
import './styles.scss';

const Checkbox = ({ onChange, name, values, label, options }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, option: { value: string | number; }) => {
    const { checked } = event.target;
    const updatedValues = { ...values };
    updatedValues[option.value] = checked;
    onChange(updatedValues);
  };

  return (
    <div>
      <label>{label}</label>
      <div className="checkbox-container" style={{ display: 'flex' }}>
        {options.map((option: { value: any; label?: any; }) => (
          <div key={option.value} className="checkbox-item" style={{ marginRight: '20px' }}>
            <input
              type="checkbox"
              id={option.value}
              name={name}
              checked={values[option.value] || false}
              onChange={(event) => handleCheckboxChange(event, option)}
            />
            <label htmlFor={option.value} style={{ marginLeft: '10px' }}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
