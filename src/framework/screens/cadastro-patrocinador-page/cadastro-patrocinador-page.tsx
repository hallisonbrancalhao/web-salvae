"use client"
import React, { useState } from 'react';
import InputField from '../../components/cadastro/form-text';
import InputFieldImage from '../../components/cadastro/form-image';
import "./styles.scss";
import { PatrocinadorRepository } from '@/services/repositories';

export default function CadastroPatrocinador() {
    const patrocinador = new PatrocinadorRepository()

    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState(null);
    const handleImageUpload = (imageFile: React.SetStateAction<null>) => {
        setFoto(imageFile);
    };

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/patrocinador';
    }

    const SalvarDados = async () => {
        try {
            patrocinador.Salvar({
                _id: '',
                nome: nome,
                foto: foto,
                status: true
            })
            setSuccess('Patrocinador cadastrado com sucesso!');
        } catch (error) {
            setError('Ocorreu um erro. Por favor, tente novamente.');
        }
    }

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro de Patrocinador</h1>
            <form className="container-forms">
                <div className="bloco-2-1">
                    <InputField label="Nome do Cupom" value={nome}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)}
                        name="nome" />
                    <InputFieldImage onImageUpload={handleImageUpload} label="Imagem Cupom" />
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

                            className="erro-botao">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
