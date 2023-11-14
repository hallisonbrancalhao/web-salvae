"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo.svg';
import useCupom from '@/core/hooks/cupom-hook';
import './styles.scss';

export default function Login() {
    const [codigo, setCodigo] = useState('');
    const [error, setError] = useState('');
    const { errors, register, validarCupom, handleSubmit, successMessage } = useCupom()
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/restaurantes';
    }

    return (
        <div className='container-cupom'>
            <header className="header">
                <Image src={Logo} alt='' width={452} height={192} className="logo" />
            </header>
            <form className="main" onSubmit={handleSubmit(validarCupom())}>
                <div className="bloco-2-3">
                    <p>Código do Cupom</p>
                    <p></p>
                    <input {...register('cupom.codigo')} type="text" placeholder='Código' />
                </div>
                <div className="container-botao">
                    <button className="botao" type='submit'>Validar</button>
                </div>
            </form>
            {successMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <p className="erro2">{successMessage}</p>
                        <button
                            onClick={() => {
                                redirecionarPagina();
                            }}
                            className="erro-botao">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
            {error && (
                <div className="container-erro">
                    <div className="erro">
                        <p className="erro2">{error}</p>
                        <button

                            className="erro-botao">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
