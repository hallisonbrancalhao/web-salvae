"use client"
import React, { useState } from 'react';
import { ICupom } from '@/core/base/types/cupom.interface';
import Cupom from '@/framework/components/cupons/cupom';
import './styles.scss';
import Link from 'next/link';

export default function Cupons({ cupom: params }: { cupom: ICupom[] }) {
    const [searchText, setSearchText] = useState('');
    const listaCupons = params

    const filteredCupons = listaCupons.filter(cupom => {
        if (searchText.trim() === '') {
            return true;
        }
        return cupom.nome.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <div className='container-restaurente'>
            <h1 className='h1'>Dashboard</h1>
            <div className="container-pesquisa">
                <h2 className='h2'>Cupons</h2>
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

            {filteredCupons.map(cupom => (
                <div key={cupom.nome} className="item-cabecalho">
                    <Cupom
                        _id={cupom._id}
                        nome={cupom.nome}
                        foto={cupom.foto ?? 'assets/images/logo.svg'}
                        status={cupom.status}
                    />
                </div>
            ))}
            <div className="container-botao">
                <Link href="/cadastrar-cupom">
                    <button className="botao">+ Adicionar Cupom</button>
                </Link>
            </div>
        </div>
    );
}
