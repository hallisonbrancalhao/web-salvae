import React from 'react';
import InputMask from 'react-input-mask'
import './styles.scss'

const InputFone = ({ onChange, name, value, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="container">
                <InputMask
                    mask="(99) 99999-9999"
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

export default InputFone;