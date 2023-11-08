"use client";
import React, { useState } from "react";
import "./styles.scss";
import useCupom from "@/core/hooks/cupom-hook";
import Cupom from "@/framework/components/cupons/cupom";
import Link from "next/link";
import useEstabelecimento from "@/core/hooks/estabelecimento-hook";

export default function Cupons() {
    const [searchText, setSearchText] = useState("");
    const { listaCupom } = useCupom();
    const { listarEstabelecimentoPorId, listaEstabelecimento } = useEstabelecimento()
    const cupons = listaCupom;

    const filteredCupons = cupons.filter((cupom) => {
        if (searchText.trim() === "") {
            return true;
        }
        return cupom.descricao.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <section>
            {cupons && (
                <div className="container-restaurente">
                    <h1 className="h1">Dashboard</h1>
                    <div className="container-pesquisa">
                        <h2 className="h2">Cupons</h2>
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
                        <div className="item-cabecalho">DESCRIÇÃO</div>
                        <div className="item-cabecalho">STATUS</div>
                        <div className="item-cabecalho">AÇÕES</div>
                    </div>

                    {filteredCupons.map((cupom) => (
                        <div key={cupom.descricao} className="item-cabecalho">
                            <Cupom
                                id={cupom.id}
                                nome={cupom.descricao}
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
            )}
        </section>
    );
}
