"use client"
import React from 'react';
import useCupom from '@/core/hooks/cupom-hook';
import useEstabelecimento from '@/core/hooks/estabelecimento-hook';
import "./styles.scss";

export default function CadastroCupom() {
    const { listaEstabelecimento } = useEstabelecimento();
    const restaurantes = listaEstabelecimento;
    const { errors, register, criarCupom, handleSubmit, categorias, diasFuncionamento } = useCupom()

    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // const [imagePreview, setImagePreview] = useState<string | null>(null);

    // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    //   const files = event.target.files;
    //   if (files) {
    //     const selected = files[0];
    //     setSelectedFile(selected);

    //     // Exibir uma prévia da imagem (neste exemplo, assumindo que é uma imagem)
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //       setImagePreview(e.target.result as string);
    //     };
    //     reader.readAsDataURL(selected);
    //   }
    // };

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Cadastro do Cupom</h1>
            <form className="container-forms" onSubmit={handleSubmit(criarCupom)}>
                <div className="bloco-2-3">
                    <p>Restaurante</p>
                    <p>Imagem Cupom</p>
                    <select>
                        {restaurantes.map((restaurante) => (
                            <option {...register('cupom.restaurante')} value={restaurante.id} key={restaurante.id}>
                                {restaurante.nome}                                
                            </option>
                        ))}
                    </select>
                    <input {...register('cupom.foto')} type="text" placeholder='Imagem Cupom' />
                    {/* <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    /> */}
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
                                    {...register(`cupom.categoria[${index}]`)}
                                    value={categoria.value}
                                />
                                {categoria.label}
                            </div>
                        ))}
                    </div>
                    <p></p>
                    <p>Dias de Funcionamento</p>
                    <p></p>
                    {/* <div className="bloco-7">
                        {diasFuncionamento.map((dias, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    {...register(`cupom.dias[${index}]`)}
                                    value={dias.value}
                                />
                                {dias.label}
                            </div>
                        ))}
                    </div> */}
                    <p></p>
                </div>
                <div className="container-botao">
                    <button className="botao" type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
