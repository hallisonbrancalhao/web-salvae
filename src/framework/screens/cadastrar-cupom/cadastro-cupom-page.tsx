"use client"
import React, { useState } from 'react';
import useCupom from '@/core/hooks/cupom-hook';
import useEstabelecimento from '@/core/hooks/estabelecimento-hook';
import "./styles.scss";

export default function CadastroCupom() {
    const { listaEstabelecimento } = useEstabelecimento();
    const restaurantes = listaEstabelecimento;
    const { errors, register, criarCupom, handleSubmit, watch, setValue, categorias, diasFuncionamento, successMessage } = useCupom()

    const handleCategoriaChange = (event: React.ChangeEvent<HTMLInputElement>, categoria: { idCategoriaPromocao: any; label?: string; }) => {
        const isChecked = event.target.checked;
        const currentCategorias = watch('cupom.promocaoCategoria');
        const categoriaId = categoria.idCategoriaPromocao;

        if (isChecked) {
            currentCategorias.push({ idCategoriaPromocao: categoriaId });
        } else {
            const index = currentCategorias.findIndex((cat) => cat.idCategoriaPromocao === categoriaId);
            if (index !== -1) {
                currentCategorias.splice(index, 1);
            }
        }
        setValue('cupom.promocaoCategoria', currentCategorias);
    };

    const handleDiasChange = (event: React.ChangeEvent<HTMLInputElement>, dia: { idDiaFuncionamento: any; label?: string; }) => {
        const isChecked = event.target.checked;
        const currentDias = watch('cupom.promocaoDia');
        const diaId = dia.idDiaFuncionamento;

        if (isChecked) {
            currentDias.push({ id: diaId });
        } else {
            const index = currentDias.findIndex((d) => d.id === diaId);
            if (index !== -1) {
                currentDias.splice(index, 1);
            }
        }
        setValue('cupom.promocaoDia', currentDias);
    };

    const [error, setError] = useState('');
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/restaurantes';
    }

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Cupom</h1>
            <form className="container-forms" onSubmit={handleSubmit(criarCupom)}>
                <div className="bloco-2-3">
                    <p>Restaurante</p>
                    <p></p>
                    <select {...register('cupom.idEstabelecimento', {
                        setValueAs: (value) => parseInt(value, 10),
                    })}
                    >
                        {restaurantes.map((restaurante) => (
                            <option value={restaurante.id} key={restaurante.id}>
                                {restaurante.nome}
                            </option>
                        ))}
                    </select>
                    {errors.cupom?.idEstabelecimento?.message && (<p>{errors.cupom?.idEstabelecimento?.message}</p>)}
                    <p></p>
                    <p>Sobre o Cupom</p>
                    <p></p>
                    <input {...register('cupom.descricao')} type="text" placeholder='Sobre o Cupom' />
                </div>

                <hr className="divisor" />

                <div className="bloco-1">
                    <p>Categoria de Atendimento</p>
                    <p></p>
                    <div className="bloco-3">
                        {categorias.map((categoria, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleCategoriaChange(e, categoria)}
                                    checked={watch('cupom.promocaoCategoria')?.some((cat) => cat.idCategoriaPromocao === categoria.idCategoriaPromocao)}
                                    value={categoria.idCategoriaPromocao}
                                />
                                {categoria.label}
                            </div>
                        ))}
                    </div>
                    {errors.cupom?.promocaoCategoria?.message && (<p>{errors.cupom?.promocaoCategoria?.message}</p>)}
                    <p></p>
                    <p>Dias de Funcionamento</p>
                    <p></p>
                    <div className="bloco-7">
                        {diasFuncionamento.map((dia, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleDiasChange(e, dia)}
                                    checked={watch('cupom.promocaoDia')?.some((d) => d.id === dia.idDiaFuncionamento)}
                                    value={dia.idDiaFuncionamento}
                                />
                                {dia.label}
                            </div>
                        ))}
                    </div>
                    {errors.cupom?.promocaoDia?.message && (<p>{errors.cupom?.promocaoDia?.message}</p>)}
                    <p></p>
                </div>
                <div className="container-botao">
                    <button className="botao" type='submit'>Enviar</button>
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
