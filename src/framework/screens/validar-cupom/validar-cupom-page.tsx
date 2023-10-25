"use client"
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo.svg';
import './styles.scss';
import { AuthContext, useAuth } from '@/services/api/auth/contexts/Auth';

export default function Login() {

    const auth = useContext(AuthContext)
    const [codigo, setCodigo] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        const response = await auth.signIn(codigo,error);
        if (response) return window.location.href = '/restaurantes';
    };

    return (
        <div className='container'>
            <header className="header">
                <Image src={Logo} alt='' width={452} height={192} className="logo" />
            </header>
            <main className='main'>
                <div className="usuario">
                    <label htmlFor="usuario">Insira o código:</label>
                </div>
                <div className="form">
                    <input
                        type="email"
                        name="usuario"
                        id="usuario"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="container-botao">
                    <button
                        onClick={handleSubmit}
                        className="botao">
                        Validar
                    </button>
                </div>
                {error && (
                    <div className="container-erro">
                        <div className="erro">
                            <p className="erro2">{error}</p>
                            <button
                                onClick={() => setError('')}
                                className="erro-botao"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
