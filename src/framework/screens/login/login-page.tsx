"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo.svg';
import './styles.scss';
import axios from 'axios';
import '../../../services/users'

export default function Login() {
    useEffect(() => {
        const validacao = () => {
            const token = localStorage.getItem("token")
            if (token && token.length > 0) {
                window.location.href = '/dashboard'
            }
        }
        validacao()
    }, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {

        if (!username.includes('@')) {
            setError('O usuário deve ser um e-mail.');
            return;
        }

        if (password.length < 8) {
            setError('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        setError('');

        const { data } = await axios.get('https://64ed24e4f9b2b70f2bfb4f04.mockapi.io/login-restaurante')
        if (data[0].cnpj === username && data[0].senha === password) {
            localStorage.setItem("token", username);
            return window.location.href = '/dashboard'
        }
        else {
            setError('Dados Incorretos');
            return;
        }
    };

    return (
        <div className='container'>
            <header className="header">
                <Image src={Logo} alt='' width={452} height={192} className="logo" />
            </header>
            <main className='main'>
                <div className="usuario">
                    <label htmlFor="usuario">Usuário:</label>
                </div>
                <div className="form">
                    <input
                        type="email"
                        name="usuario"
                        id="usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="usuario">
                    <label htmlFor="senha">Senha:</label>
                </div>
                <div className="form">
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="container-botao">
                    <button
                        onClick={handleSubmit}
                        className="botao">
                        Entrar
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
