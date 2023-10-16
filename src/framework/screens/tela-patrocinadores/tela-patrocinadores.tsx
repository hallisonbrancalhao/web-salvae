"use client";
import { useState } from 'react';
import pizza from 'assets/images/pizza.svg';
import '../tela-cupons/styles.scss';

export default function TelaPatrocinador() {
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
                    <div className="tela-de-cupons__texto-cabecalho">
                        <h1>Patrocinadores</h1>
                    </div>
                </div>

                <div className="tela-de-cupons__botoes">
                    <button className="tela-de-cupons__editar">
                        Cadastrar Patrocinador</button>

                </div>

                <div className="tela-de-cupons__inicio">

                    <div className="cabecalho">
                        <div className="item-cabecalho">NOME DO PATROCINADOR</div>
                        <div className="item-cabecalho">STATUS</div>
                        <div className="item-cabecalho">AÇÕES</div>
                    </div>
                </div>
            </div>
        </>
    )
}