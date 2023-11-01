"use client"
import React from 'react';
import useCupom from '@/core/hooks/cupom-hook';
import useEstabelecimento from '@/core/hooks/estabelecimento-hook';
import "./styles.scss";

export default function CadastroCupom() {
    const { listaEstabelecimento } = useEstabelecimento();
    const restaurantes = listaEstabelecimento;
    const { errors, register, criarCupom, handleSubmit, handleImage, handleRestauranteChange,
        watch, setValue, categorias, diasFuncionamento } = useCupom()

    const handleCategoriaChange = (event, categoria) => {
        const isChecked = event.target.checked;
        const currentCategorias = watch('cupom.categoria');
        console.log(currentCategorias);
        if (isChecked) {
            currentCategorias.push(categoria);
        } else {
            const index = currentCategorias.indexOf(categoria);
            if (index !== -1) {
                currentCategorias.splice(index, 1);
            }
        }
        setValue('cupom.categoria', currentCategorias);
    };

    const handleDiasChange = (event, dia) => {
        const isChecked = event.target.checked;
        const currentDias = watch('cupom.dias');
        console.log(currentDias);
        if (isChecked) {
            currentDias.push(dia);
        } else {
            const index = currentDias.indexOf(dia);
            if (index !== -1) {
                currentDias.splice(index, 1);
            }
        }
        setValue('cupom.dias', currentDias);
    };

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Cupom</h1>
            <form className="container-forms" onSubmit={handleSubmit(criarCupom)}>
                <div className="bloco-2-3">
                    <p>Restaurante</p>
                    <p>Imagem Cupom</p>
                    <select onChange={handleRestauranteChange}>
                        {restaurantes.map((restaurante) => (
                            <option value={restaurante.id} key={restaurante.id}>
                                {restaurante.nome}
                            </option>
                        ))}
                    </select>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        className='format-foto'
                    />
                    <p>Nome</p>
                    <p></p>
                    <input {...register('cupom.nome')} type="text" placeholder='Nome' />
                    <p></p>
                    <p>Sobre o Cupom</p>
                    <p></p>
                    <input {...register('cupom.sobre')} type="text" placeholder='Sobre o Cupom' />
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
                                    onChange={(e) => handleCategoriaChange(e, categoria.value)}
                                    checked={watch('cupom.categoria')?.includes(categoria.value)}
                                    value={categoria.value}
                                />
                                {categoria.value}
                            </div>
                        ))}
                    </div>
                    {errors.cupom?.categoria?.message && (<p>{errors.cupom?.categoria?.message}</p>)}
                    <p></p>
                    <p>Dias de Funcionamento</p>
                    <p></p>
                    <div className="bloco-7">
                        {diasFuncionamento.map((dia, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleDiasChange(e, dia.value)}
                                    checked={watch('cupom.dias')?.includes(dia.value)}
                                    value={dia.value}
                                />
                                {dia.label}
                            </div>
                        ))}
                    </div>
                    {errors.cupom?.dias?.message && (<p>{errors.cupom?.dias?.message}</p>)}
                    <p></p>
                </div>
                <div className="container-botao">
                    <button className="botao" type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
