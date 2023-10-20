'use client'
import React, { useState, useEffect } from 'react';
import InputField from '../../components/cadastro/form-text';
import SelectEstabelecimento from '@/framework/components/cadastro/form-estabelecimento';
import InputFieldImage from '../../components/cadastro/form-image';
import Checkbox from '@/framework/components/cadastro/form-checkbox';
import "./styles.scss";
import { Estabelecimento } from '@/services/base/types/estabelecimento';
import { Cupom } from '@/services/base/types/cupom';
import { CupomRepository } from '@/services/repositories';

export default function CadastroCupom({ estabelecimento: paramsEstab, cupom: params }: { estabelecimento: Estabelecimento[], cupom: Cupom }) {
    const cupomEditado = new CupomRepository()
    const [restaurante, setRestaurante] = useState('');
    const [nome, setNome] = useState('');
    const [sobre, setSobre] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const [dias, setDias] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setRestaurante(paramsEstab.nome);
        setNome(params.nome);
        setSobre(params.sobre);
        setUploadedImage(params.uploadedImage);
        setCategoria(params.categoria);
        setDias(params.dias);
    }, []);

    const handleImageUpload = (imageFile) => {
        setUploadedImage(imageFile);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setError('');
    };

    const EditarDados = async () => {
        cupomEditado.Editar({
            _id: params._id,
            restaurante: restaurante,
            nome: nome,
            sobre: sobre,
            uploadedImage: uploadedImage,
            categoria: categoria,
            dias: dias,
        });
        window.location.href = 'http://localhost:3000/restaurantes';
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
            <h1 className='h1'>Cadastro do Cupom</h1>
            <form onSubmit={handleSubmit} className="container-forms">
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
                        type="submit"
                        onClick={EditarDados}
                        className="botao"
                    >
                        Salvar Alterações
                    </button>
                </div>
            </form>
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
