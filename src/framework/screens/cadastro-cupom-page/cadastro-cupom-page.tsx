"use client"
import React, { useState } from 'react';
import InputField from '../../components/cadastro/form-text';
import InputFone from '../../components/cadastro/form-fone';
import InputFieldImage from '../../components/cadastro/form-image';
import SelectField from '../../components/cadastro/form-categoria';
import Checkbox from '@/framework/components/cadastro/form-checkbox';
import axios from 'axios';
import "./styles.scss";
import { URL_CUPOM } from '../../constantes/URL.API'

export default function CadastroRestaurante() {
    const [restaurante, setRestaurante] = useState('');
    const [nome, setNome] = useState('');
    const [sobre, setSobre] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const handleImageUpload = (imageFile: React.SetStateAction<null>) => {
        setUploadedImage(imageFile);
    };

    const [categoria, setCategoria] = useState('');
    const [dias, setDias] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setError('');
    };

    const SalvarDados = async () => {
        try {
            await axios.post(URL_CUPOM, {
                restaurante: restaurante,
                nome: nome,
                sobre: sobre,
                uploadedImage: uploadedImage,
                categoria: categoria,
                dias: dias,
            });
            console.log("Funcionou")
        } catch (error) {
            console.log("Erro no cadastro")
        };
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

    const restaurantes = [
        { value: 1, label: 'TentaTizone' },
        { value: 2, label: 'Outro' },
        { value: 3, label: 'Dominos' },
    ];

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Cupom</h1>
            <form onSubmit={handleSubmit} className="container-forms">
                <div className="bloco-2-3">
                    <SelectField
                        label="Restaurante"
                        name="restaurante"
                        value={restaurante}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setRestaurante(e.target.value)}
                        options={restaurantes}
                    />
                    <InputFieldImage onImageUpload={handleImageUpload} label="Imagem Cupom" />
                    <InputField label="Nome do Cupom" value={nome}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)}
                        name="nome" />
                    <InputField label="Sobre o Cupom" value={sobre}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSobre(e.target.value)}
                        name="sobre" />
                </div>

                <hr className="divisor" />

                <div className="bloco-1-3">
                    <Checkbox
                        label="Categoria do Restaurante"
                        name="categoria"
                        values={categoria}
                        onChange={(e: React.SetStateAction<string>) => setCategoria(e)}
                        options={categorias}
                    />

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
                        onClick={SalvarDados}
                        className="botao">
                        Salvar
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
