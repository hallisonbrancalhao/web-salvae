import React from 'react';
import './styles.scss'

const InputPassword = ({ onChange, name, value, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="container">
                <input
                    type="password"
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

export default InputPassword;
