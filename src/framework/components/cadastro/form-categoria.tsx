import React from 'react';
import './styles.scss';

const SelectField = ({ onChange, name, value, label, options }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="container">
                <select
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    className="input"
                >
                    {options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectField;
