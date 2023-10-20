"use client"
import React, { useEffect, useState } from 'react';
import InputField from '../../components/cadastro/form-text';
import InputFone from '../../components/cadastro/form-fone';
import InputFieldImage from '../../components/cadastro/form-image';
import InputPassword from '../../components/cadastro/form-senha';
import InputCep from '../../components/cadastro/form-cep';
import InputCnpj from '../../components/cadastro/form-cnpj';
import SelectField from '../../components/cadastro/form-categoria';
import { EstabelecimentoRepository } from '@/services/repositories';
import { Estabelecimento } from '@/services/base/types/estabelecimento';
import axios from 'axios';
import "./styles.scss";

export default function EditarRestaurante({ estabelecimento: paramsEstab }: { estabelecimento: Estabelecimento }) {
    const restauranteEditado = new EstabelecimentoRepository()
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [instagram, setInstagram] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const handleFotoPerfil = (imageFile: React.SetStateAction<null>) => {
        setFotoPerfil(imageFile);
    };
    const [fotoCapa, setFotoCapa] = useState(null);
    const handleFotoCapa = (imageFile: React.SetStateAction<null>) => {
        setFotoCapa(imageFile);
    };
    const [password, setPassword] = useState('');
    const [passwordConfirma, setPasswordConfirma] = useState('');
    const [categoria, setCategoria] = useState(['']);
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(() => {
        setCnpj(paramsEstab.cnpj);
        setNome(paramsEstab.nome);
        setWhatsapp(paramsEstab.whatsapp);
        setInstagram(paramsEstab.instagram);
        setFotoPerfil(paramsEstab.fotoPerfil);
        setFotoCapa(paramsEstab.fotoCapa);
        setPassword(paramsEstab.senha);
        setCategoria(paramsEstab.categoria);
        setCep(paramsEstab.endereco.cep);
        setRua(paramsEstab.endereco.rua);
        setComplemento(paramsEstab.endereco.complemento);
        setNumero(paramsEstab.endereco.numero);
        setBairro(paramsEstab.endereco.bairro);
        setCidade(paramsEstab.endereco.cidade);
        setEstado(paramsEstab.endereco.estado);
    }, []);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const redirecionarPagina = () => {
        window.location.href = 'http://localhost:3000/restaurantes';
    }

    async function fetchAddressByCep(cep: any) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;

            return {
                rua: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf,
            };
        } catch (error) {
            console.error('Erro ao buscar o endereço pelo CEP:', error);
            return null;
        }
    }

    const handleCepChange = async (event: { target: { value: any; }; }) => {
        const newCep = event.target.value;
        if (newCep.length === 9) {
            setCep(newCep)
            const addressData = await fetchAddressByCep(newCep);

            if (addressData) {
                setRua(addressData.rua);
                setBairro(addressData.bairro);
                setCidade(addressData.cidade);
                setEstado(addressData.estado);
            }
        }
    };

    const SalvarDados = async () => {
        if (password != passwordConfirma) {
            setError('A senha digitada não confere com a validação.');
            return;
        }

        if (password.length < 8) {
            setError('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        try {
            await restauranteEditado.Editar({
                _id: paramsEstab._id,
                cnpj: cnpj,
                nome: nome,
                whatsapp: whatsapp,
                instagram: instagram,
                fotoPerfil: fotoPerfil,
                senha: password,
                categoria: categoria,
                fotoCapa: null,
                endereco: {
                    cep: cep,
                    rua: rua,
                    complemento: complemento,
                    numero: numero,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                },
                status: true,
                avaliacao: 0
            })
            setSuccess('Restaurante atualizado com sucesso!');
        } catch (error) {
            setError('Ocorreu um erro. Por favor, tente novamente.');
        }
    }
    const categorias = [
        { value: 'pizza', label: 'Pizza' },
        { value: 'hamburger', label: 'Hamburger' },
        { value: 'sorvete', label: 'Sorvete' },
    ];

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Restaurante</h1>
            <form className="container-forms">
                <div className="bloco-2-3">
                    <InputField label="Nome do Restaurante" value={nome}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)}
                        name="nome" />
                    <InputFieldImage onImageUpload={handleFotoPerfil} label="Logo Restaurante" />
                    <InputFone label="WhatsApp" value={whatsapp}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setWhatsapp(e.target.value)}
                        name="whatsapp" />
                    <InputField label="Instagram" value={instagram}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInstagram(e.target.value)}
                        name="instagram" />
                </div>

                <hr className="divisor" />

                <div className="bloco-1">
                    <InputCep label="CEP" value={cep}
                        onChange={handleCepChange}
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

                <hr className="divisor" />

                <div className="bloco-1-3">
                    <SelectField
                        label="Categoria do Restaurante"
                        name="categoria"
                        value={categoria}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCategoria(e.target.value)}
                        options={categorias}
                    />
                    <InputCnpj label="CNPJ" value={cnpj}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCnpj(e.target.value)}
                        name="cnpj" />
                </div>

                <hr className="divisor" />

                <div className="bloco-2-3">
                    <InputPassword label="Senha" value={password}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                        name="senha" />
                    <InputPassword label="Confirmação de Senha" value={passwordConfirma}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPasswordConfirma(e.target.value)}
                        name="passwordConfirma" />
                </div>

                <hr className="divisor" />

                <div className="container-botao">
                    <button
                        type="button"
                        onClick={SalvarDados}
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
