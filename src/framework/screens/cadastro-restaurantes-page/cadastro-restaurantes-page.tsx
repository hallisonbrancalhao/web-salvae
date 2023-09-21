"use client"
import React, { useState } from 'react';
import InputField from '../../components/cadastro/form-text';
import InputFone from '../../components/cadastro/form-fone';
import InputFieldImage from '../../components/cadastro/form-image';
import InputPassword from '../../components/cadastro/form-senha';
import InputCep from '../../components/cadastro/form-cep';
import InputCnpj from '../../components/cadastro/form-cnpj';
import InputMask from 'react-input-mask'
import "./styles.scss";

export default function CadastroRestaurante() {
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [instagram, setInstagram] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const handleImageUpload = (imageFile: React.SetStateAction<null>) => {
        setUploadedImage(imageFile);
    };
    const [password, setPassword] = useState('');
    const [passwordConfirma, setPasswordConfirma] = useState('');

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cnpj, setCnpj] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (password != passwordConfirma) {
            setError('A senha digitada não confere com a validação.');
            return;
        }

        if (password.length < 8) {
            setError('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        setError('');
    };

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Restaurante</h1>
            <form onSubmit={handleSubmit} className="container-forms">
                <div className="bloco-2-3">
                    <InputField label="Nome do Restaurante" value={nome}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)}
                        name="nome" />
                    <InputFieldImage onImageUpload={handleImageUpload} />
                    <InputFone label="WhatsApp" value={whatsapp}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setWhatsapp(e.target.value)}
                        name="whatsapp" />
                    <InputField label="Instagram" value={instagram}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInstagram(e.target.value)}
                        name="instagram" />
                </div>

                <hr className="divisor"/>

                <div className="bloco-1">
                    <InputCep label="CEP" value={cep}   
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCep(e.target.value)}
                        name="cep"
                    />
                </div>

                <div className="bloco-2-3">
                    <InputField label="Rua" value={rua}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setRua(e.target.value)}
                        name="rua" />
                    <InputField label="Número" value={numero}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNumero(e.target.value)}
                        name="numero" />
                    <InputField label="Complemento" value={complemento}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setComplemento(e.target.value)}
                        name="complemento" />
                    <InputField label="Bairro" value={bairro}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setBairro(e.target.value)}
                        name="bairro" />
                    <InputField label="Cidade" value={cidade}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCidade(e.target.value)}
                        name="cidade" />
                    <InputField label="Estado" value={estado}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEstado(e.target.value)}
                        name="estado" />
                </div>

                <hr className="divisor"/>

                <div className="bloco-1-3">
                    <InputField label="Categoria do Restaurante" value={categoria}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCategoria(e.target.value)}
                        name="categoria" />
                    <InputCnpj label="CNPJ" value={cnpj}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCnpj(e.target.value)}
                        name="cnpj" />
                </div>


                <hr className="divisor"/>

                <div className="bloco-2-3">
                    <InputPassword label="Senha" value={password}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                        name="senha" />
                    <InputPassword label="Confirmação de Senha" value={passwordConfirma}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPasswordConfirma(e.target.value)}
                        name="passwordConfirma" />
                </div>

                <hr className="divisor"/>

                <div className="container-botao">
                    <button
                        type="submit"
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
