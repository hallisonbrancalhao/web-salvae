import React from 'react';
import './styles.scss';
import { Estabelecimento } from '@/core/base/types/estabelecimento';

const SelectEstabelecimento = ({ onChange, name, value, label, options }) => {
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
                    {options.map((option: Estabelecimento) => (
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
