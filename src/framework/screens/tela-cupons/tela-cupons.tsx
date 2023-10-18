"use client";
import { useState } from 'react';
import pizza from 'assets/images/pizza.svg';
import Image from 'next/image';
import './styles.scss';

export default function TelaCupons() {
    const [searchText, setSearchText] = useState('');

    const restaurantes = [
        {
            nome: "TentaZione Pizzaria",

            avaliacao: 4,
            status: true
        },
        {
            nome: "Outro Restaurante",

            avaliacao: 2.3,
            status: false
        },
        {
            nome: "Restaurante Legal",

            avaliacao: 2.3,
            status: false
        },
        // ... outros restaurantes
    ];

    return (
        <>
            <div className="tela-de-cupons">
                <div className="tela-de-cupons__cabecalho">
                    <Image src={pizza} width={90} height={90} alt="pizza" />
                    <div className="tela-de-cupons__texto-cabecalho">
                        <h1>Tentazione pizza</h1>
                    </div>
                </div>

                <div className="tela-de-cupons__botoes">
                    <button className="tela-de-cupons__editar">
                        Editar Restaurante</button>
                    <button className="tela-de-cupons__editar">Adicionar Cupom</button>
                </div>

                <div className="tela-de-cupons__inicio">
                    <div className="container-pesquisa">
                        <h2 className='h2'>Cupons cadastrados</h2>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Pesquisar"
                                className="barra-pesquisa"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <div className="pesquisa">
                                <span className="icone-pesquisa">🔍</span>
                            </div>
                        </div>
                    </div>
                    <div className="cabecalho">
                        <div className="item-cabecalho">FOTO</div>
                        <div className="item-cabecalho">NOME DO CUPOM</div>
                        <div className="item-cabecalho">CADEGORIA</div>
                        <div className="item-cabecalho">STATUS</div>
                        <div className="item-cabecalho">AÇÕES</div>
                    </div>
                </div>
            </div>
        </>
    );
}
