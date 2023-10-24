"use client"
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo.svg';
import './styles.scss';
import { AuthContext, useAuth } from '@/services/api/auth/contexts/Auth';

export default function Login() {

    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {

        // if (!username.includes('@')) {
        //     setError('O usuário deve ser um e-mail.');
        //     return;
        // }

        // if (senha.length < 8) {
        //     setError('A senha deve ter no mínimo 8 caracteres.');
        //     return;
        // }

        setError('');
        console.log(email, senha)
        const response = await auth.signIn(email, senha);
        if (response) return window.location.href = '/restaurantes';
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
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
