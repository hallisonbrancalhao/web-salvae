"use client"
import React, { useState } from 'react';
import Foto from '../../../../assets/images/tantazione.svg'
import Restaurante from '../../components/restaurantes/restaurante';
import './styles.scss';

export default function Restaurantes() {
    const [searchText, setSearchText] = useState('');

    const restaurantes = [
        {
            nome: "TentaZione Pizzaria",
            foto: Foto,
            avaliacao: 4,
            status: true
        },
        {
            nome: "Outro Restaurante",
            foto: Foto,
            avaliacao: 2.3,
            status: false
        },
        {
            nome: "Restaurante Legal",
            foto: Foto,
            avaliacao: 2.3,
            status: false
        },
        // ... outros restaurantes
    ];

    const filteredRestaurantes = restaurantes.filter(restaurante => {
        if (searchText.trim() === '') {
            return true;
        }
        return restaurante.nome.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Dashboard</h1>
            <div className="container-pesquisa">
                <h2 className='h2'>Restaurantes</h2>
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
                <div className="item-cabecalho">NOME</div>
                <div className="item-cabecalho">AVALIAÇÃO</div>
                <div className="item-cabecalho">STATUS</div>
                <div className="item-cabecalho">AÇÕES</div>
            </div>
            {/* Renderiza os restaurantes filtrados */}
            {filteredRestaurantes.map(restaurante => (
                <div key={restaurante.nome} className="item-cabecalho">
                    <Restaurante
                        nome={restaurante.nome}
                        foto={restaurante.foto}
                        avaliacao={restaurante.avaliacao}
                        status={restaurante.status}
                    />
                </div>
            ))}
        </div>
    );
}
