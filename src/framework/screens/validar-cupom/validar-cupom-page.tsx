"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo.svg';
import useCupom from '@/core/hooks/cupom-hook';
import { useRouter } from 'next/navigation';
import './styles.scss';

export default function Valida() {
    const { push } = useRouter()
    const [error, setError] = useState('');
    const { errors, register, getValues, validarCupom, handleSubmit, listarIdPromocao, successMessage, promocaId } = useCupom()
    const redirecionarPagina = () => {
        location.reload();
    }
    const [idEstabelecimento, setIdEstabelecimento] = useState<string | null>(null)

    useEffect(() => {
        if (!idEstabelecimento) {
            const getuser = () => {
                const data = localStorage.getItem(process.env.NEXT_PUBLIC_USER_TOKEN);
                if (data) {
                    const datajson = JSON.parse(data)
                    const user = datajson.user.id
                    return setIdEstabelecimento(user)
                }
            }
            getuser()
        }

        if (!promocaId) {
            const getPromocaoId = () => {
                if (idEstabelecimento)
                    listarIdPromocao(idEstabelecimento)
            }
            getPromocaoId()
        }
        console.log(idEstabelecimento, promocaId)
    }, [listarIdPromocao, idEstabelecimento, promocaId])

    const handleValidar = async () => {
        event?.preventDefault()
        const codigo = getValues('cupom.codigo')
        if (promocaId)
            validarCupom(promocaId, codigo)
    }

    return (
        <div className='container-cupom'>
            <header className="header">
                <Image src={Logo} alt='' width={452} height={192} className="logo" />
            </header>
            <form className="main" onSubmit={handleSubmit(handleValidar)}>
                <div className="input">
                    <p className='cupom'>Código do Cupom</p>
                    <p></p>
                    <input {...register('cupom.codigo')} type="text" placeholder='Código' className='input'/>
                </div>
                <div className="container-botao">
                    <button
                        className="botao"
                        type="submit"
                    >Validar</button>
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
