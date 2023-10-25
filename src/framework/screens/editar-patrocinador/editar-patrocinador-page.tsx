'use client'
import React, { useState, useEffect } from 'react';
import InputField from '../../components/cadastro/form-text';
import InputFieldImage from '../../components/cadastro/form-image';
import { PatrocinadorRepository } from '@/services/repositories';
import { Patrocinadores } from '@/core/base/types/patrocinadores';
import './styles.scss';

export default function EditarPatrocinador({ patrocinador: params }: { patrocinador: Patrocinadores }) {
    const patrocinadorEditado = new PatrocinadorRepository
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/patrocinador';
    }

    useEffect(() => {
        setNome(params.nome);
        setFoto(params.foto);
    }, []);

    const handleImageUpload = (imageFile) => {
        setFoto(imageFile);
    };

    const EditarDados = async () => {
        try {
            await patrocinadorEditado.Editar({
                _id: params._id,
                nome: nome,
                foto: foto,
                status: true,
            });
            setSuccess('Patrocinador atualizado com sucesso!');
        } catch (error) {
            setError('Ocorreu um erro. Por favor, tente novamente.');
        }
    }

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Editar Patrocinador</h1>
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

                            className="erro-botao">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
