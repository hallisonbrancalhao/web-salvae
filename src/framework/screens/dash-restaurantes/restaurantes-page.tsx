"use client";
import React, { useState } from "react";
import "./styles.scss";
import useEstabelecimento from "@/core/hooks/estabelecimento-hook";
import Restaurante from "@/framework/components/restaurantes/restaurante";
import Link from "next/link";

export default function Restaurantes() {
  const [searchText, setSearchText] = useState("");
  const { estabelecimento } = useEstabelecimento();
  const restaurantes = estabelecimento;

  const filteredRestaurantes = restaurantes.filter((restaurante) => {
    if (searchText.trim() === "") {
      return true;
    }
    return restaurante.nome.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <section>
      {restaurantes && (
        <div className="container-restaurente">
          <h1 className="h1">Dashboard</h1>
          <div className="container-pesquisa">
            <h2 className="h2">Restaurantes</h2>
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

          {filteredRestaurantes.map((restaurante) => (
            <div key={restaurante.nome} className="item-cabecalho">
              <Restaurante
                _id={restaurante._id}
                nome={restaurante.nome}
                fotoPerfil={restaurante.fotoPerfil ?? "assets/images/logo.svg"}
                avaliacao={restaurante.avaliacao}
                status={restaurante.status}
              />
            </div>
          ))}
          <div className="container-botao">
            <Link href="/cadastrar-restaurante">
              <button className="botao">+ Adicionar Restaurante</button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
