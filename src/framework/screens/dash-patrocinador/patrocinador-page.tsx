"use client"
import React, { useState } from 'react';
import Patrocinador from '@/framework/components/patrocinador/patrocinador';
import './styles.scss';
import Link from 'next/link';
import usePatrocinio from '@/core/hooks/patrocinio-hook';

export default function Patrocinadores() {
    const [searchText, setSearchText] = useState('');
    const { listaPatrocinadores } = usePatrocinio();

    // Certifique-se de que listaPatrocinadores seja uma matriz
    const patrocinadores = Array.isArray(listaPatrocinadores) ? listaPatrocinadores : [];

    const filteredPatrocinadores = patrocinadores.filter(patrocinador => {
        if (searchText.trim() === '') {
            return true;
        }
        return patrocinador.nome.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Dashboard</h1>
            <div className="container-pesquisa">
                <h2 className='h2'>Patrocinadores</h2>
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
                <div className="item-cabecalho">STATUS</div>
                <div className="item-cabecalho">AÇÕES</div>
            </div>

            {filteredPatrocinadores.map(patrocinador => (
                <div key={patrocinador.nome} className="item-cabecalho">
                    <Patrocinador
                        id={patrocinador.id}
                        nome={patrocinador.nome}
                        foto={patrocinador.banner ?? 'assets/images/logo.svg'}
                        status={patrocinador.status}
                    />
                </div>
            ))}
            <div className="container-botao">
                <Link href="/cadastrar-patrocinador">
                    <button className="botao">+ Adicionar Patrocinador</button>
                </Link>
            </div>
        </div>
    );
}
