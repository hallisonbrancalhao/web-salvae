'use client'
import React, { useEffect, useState } from 'react';
import "./styles.scss";
import useEstabelecimento from '@/core/hooks/estabelecimento-hook';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EditarRestaurante({ id: params }: { id: string }) {
    const {
        errors,
        estabelecimento,
        setValue,
        register,
        listarEstabelecimentoPorId,
        editarEstabelecimento,
        handleSubmit,
        handleImagePerfil,
        handleImageCapa,
        categorias,
        successMessage,
    } = useEstabelecimento();

    const [dadosCarregados, setDadosCarregados] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await listarEstabelecimentoPorId(params);
            setDadosCarregados(true);
        };

        fetchData();
    }, [listarEstabelecimentoPorId, params]);

    useEffect(() => {
        if (dadosCarregados) {
            if (estabelecimento) {
                setValue('estabelecimento.id', estabelecimento.id ?? '');
                setValue('estabelecimento.nome', estabelecimento.nome ?? '');
                setValue('estabelecimento.cnpj', estabelecimento.cnpj ?? '');
                setValue('estabelecimento.fotoCapa', estabelecimento.fotoCapa ?? '');
                setValue('estabelecimento.fotoPerfil', estabelecimento.fotoPerfil ?? '');
                setValue('estabelecimento.instagram', estabelecimento.instagram ?? '');
                setValue('estabelecimento.whatsapp', estabelecimento.whatsapp ?? '');
                setValue('estabelecimento.estabelecimentoCategoria', estabelecimento.estabelecimentoCategoria ?? 1);
                setValue('estabelecimento.endereco.cep', estabelecimento.endereco.cep ?? '');
                setValue('estabelecimento.endereco.logradouro', estabelecimento.endereco.logradouro ?? '');
                setValue('estabelecimento.endereco.numero', estabelecimento.endereco.numero ?? '');
                setValue('estabelecimento.endereco.complemento', estabelecimento.endereco.complemento ?? '');
                setValue('estabelecimento.endereco.bairro', estabelecimento.endereco.bairro ?? '');
                setValue('estabelecimento.endereco.cidade', estabelecimento.endereco.cidade ?? '');
                setValue('estabelecimento.endereco.estado', estabelecimento.endereco.estado ?? '');
            }
        }
    }, [dadosCarregados, estabelecimento, register, setValue]);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const passwordType = showPassword ? 'text' : 'password';
    const [error, setError] = useState('');
    const redirecionarPagina = () => {
        //window.location.href = 'http://localhost:3000/restaurantes';
    }
    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Editar Restaurante</h1>
            <form className="container-forms" onSubmit={handleSubmit(editarEstabelecimento)}>
                <div className="bloco-2-3">
                    <p></p>
                    <p></p>
                    <p>Nome do Restaurante</p>
                    <p></p>
                    <input
                        {...register('estabelecimento.nome')}
                        type="text"
                        placeholder='Nome do Restaurante'
                    />
                    <p></p>
                    <p>Foto Perfil</p>
                    <p>Foto Capa</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagePerfil}
                        className='format-foto'
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageCapa}
                        className='format-foto'
                    />
                    <p>WhatsApp</p>
                    <p>Instagram</p>
                    <input
                        {...register('estabelecimento.whatsapp')}
                        type="text"
                        placeholder='WhatsApp'
                    />
                    <input
                        {...register('estabelecimento.instagram')}
                        type="text"
                        placeholder='Instagram'
                    />
                </div>

                <hr className="divisor" />

                <div className="bloco-1">
                    <p>CEP</p>
                    <input
                        {...register('estabelecimento.endereco.cep')}
                        type="text"
                        placeholder='CEP'
                        maxLength={9}

                    />
                </div>
                <div className="bloco-2-3">
                    <p>Rua</p>
                    <p>Número</p>
                    <input
                        {...register('estabelecimento.endereco.logradouro')}
                        type="text"
                        placeholder='Rua'
                    />
                    <input
                        {...register('estabelecimento.endereco.numero')}
                        type="text"
                        placeholder='Número'
                    />
                    <p>Complemento</p>
                    <p>Município</p>
                    <input
                        {...register('estabelecimento.endereco.complemento')}
                        type="text"
                        placeholder='Complemento'
                    />
                    <input
                        {...register('estabelecimento.endereco.bairro')}
                        type="text"
                        placeholder='Município'
                    />
                    <p>Cidade</p>
                    <p>Estado</p>
                    <input
                        {...register('estabelecimento.endereco.cidade')}
                        type="text"
                        placeholder='Cidade'
                    />
                    <input
                        {...register('estabelecimento.endereco.estado')}
                        type="text"
                        placeholder='Estado'
                    />
                </div>

                <hr className="divisor" />

                <div className="bloco-2-3">
                    <p>Categoria</p>
                    <p>CNPJ</p>
                    <select
                        {...register('estabelecimento.estabelecimentoCategoria', {
                            setValueAs: (value) => parseInt(value, 10),
                        })}
                    >
                        {categorias.map((categoria) => (
                            <option key={categoria.value} value={categoria.value}>
                                {categoria.label}
                            </option>
                        ))}
                    </select>
                    {errors.estabelecimento?.estabelecimentoCategoria?.message && (<p>{errors.estabelecimento?.estabelecimentoCategoria?.message}</p>)}
                    <input
                        {...register('estabelecimento.cnpj')}
                        type="text"
                        placeholder='CNPJ'
                    />
                    <p>
                        Senha
                        <button onClick={togglePasswordVisibility} type="button">
                            <FontAwesomeIcon
                                className="password-toggle-icon"
                                icon={showPassword ? faEyeSlash : faEye}
                            />
                        </button>
                    </p>
                    <p>Confirmar Senha</p>
                    <input
                        {...register('estabelecimento.senha')}
                        type={passwordType}
                        placeholder='Senha'
                    />
                    <input
                        {...register('estabelecimento.validasenha')}
                        type={passwordType}
                        placeholder='Confirmar Senha'
                    />
                </div>

                <div className="container-botao">
                    <button className="botao" type='submit'>
                        Salvar Alterações
                    </button>
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
    );
}
