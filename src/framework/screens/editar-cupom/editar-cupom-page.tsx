'use client'
import React, { useState, useEffect } from 'react';
import InputField from '../../components/cadastro/form-text';
import SelectEstabelecimento from '@/framework/components/cadastro/form-estabelecimento';
import InputFieldImage from '../../components/cadastro/form-image';
import Checkbox from '@/framework/components/cadastro/form-checkbox';
import './styles.scss';
import { Estabelecimento } from '@/core/base/types/estabelecimento';
import { Cupons } from '@/core/base/types/cupons';
import { CupomRepository } from '@/services/repositories';

export default function EditarCupom({ estabelecimento: paramsEstab, cupom: params }: { estabelecimento: Estabelecimento, cupom: Cupons }) {
    const cupomEditado = new CupomRepository()
    const [restaurante, setRestaurante] = useState('');
    const [nome, setNome] = useState('');
    const [sobre, setSobre] = useState('');
    const [foto, setFoto] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const [dias, setDias] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/cupom';
    }

    useEffect(() => {
        setRestaurante(paramsEstab.nome);
        setNome(params.nome);
        setSobre(params.sobre);
        setFoto(params.foto);
        setCategoria(params.categoria);
        setDias(params.dias);
    }, []);

    const handleImageUpload = (imageFile) => {
        setFoto(imageFile);
    };

    const EditarDados = async () => {
        try {
            await cupomEditado.Editar({
                _id: params._id,
                restaurante: restaurante,
                nome: nome,
                sobre: sobre,
                foto: foto,
                categoria: categoria,
                dias: dias,
                status: true,
            });
            setSuccess('Cupom atualizado com sucesso!');
        } catch (error) {
            setError('Ocorreu um erro. Por favor, tente novamente.');
        }
    }

    const categorias = [
        { value: 1, label: 'Presencial' },
        { value: 2, label: 'Delivery' },
        { value: 3, label: 'TakeAway' },
    ];

    const diasFuncionamento = [
        { value: 1, label: 'Segunda-feira' },
        { value: 2, label: 'Terça-feira' },
        { value: 3, label: 'Quarta-feira' },
        { value: 4, label: 'Quinta-feira' },
        { value: 5, label: 'Sexta-feira' },
        { value: 6, label: 'Sábado' },
        { value: 7, label: 'Domingo' },
    ];

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Editar Cupom</h1>
            <form className="container-forms">
                <div className="bloco-2-1">
                    <SelectEstabelecimento
                        label="Restaurante"
                        name="restaurante"
                        value={restaurante}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setRestaurante(e.target.value)}
                        options={paramsEstab.map((e) => e)}
                    />
                    <InputFieldImage onImageUpload={handleImageUpload} label="Imagem Cupom" />
                </div>
                <div className="bloco-1">
                    <InputField label="Nome do Cupom" value={nome}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)}
                        name="nome" />
                    <InputField label="Sobre o Cupom" value={sobre}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSobre(e.target.value)}
                        name="sobre" />
                </div>

                <hr className="divisor" />

                <div className="bloco-1">
                    <Checkbox
                        label="Categoria do Restaurante"
                        name="categoria"
                        values={categoria}
                        onChange={(e: React.SetStateAction<string>) => setCategoria(e)}
                        options={categorias}
                    />
                </div>

                <hr className="divisor" />

                <div className="bloco-1">
                    <Checkbox
                        label="Dias de Funcionamento"
                        name="dias"
                        values={dias}
                        onChange={(e: React.SetStateAction<string>) => setDias(e)}
                        options={diasFuncionamento}
                    />
                </div>

                <hr className="divisor" />

                <div className="container-botao">
                    <button
                        type="button"
                        onClick={EditarDados}
                        className="botao">
                        Salvar Alterações
                    </button>
                </div>
            </form>
            {success && (
                <div className="modal">
                    <div className="modal-content">
                        <p className="erro2">{success}</p>
                        <button
                            onClick={() => {
                                setSuccess('');
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
                            onClick={() => setError('')}
                            className="erro-botao">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
