"use client";
import React, { useState } from "react";
import useEstabelecimento from "@/core/hooks/estabelecimento-hook";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import "./styles.scss";

export default function CadastroEstabelecimento() {
  const {
    errors,
    register,
    criarEstabelecimento,
    handleSubmit,
    categorias,
    successMessage,
    isLoading,
  } = useEstabelecimento();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const passwordType = showPassword ? "text" : "password";
  const [error, setError] = useState("");
  const { push } = useRouter();
  const redirecionarPagina = () => {
    push("/restaurantes");
  };

  return (
    <div className="container-restaurente">
      <h1 className="h1">Cadastro do Restaurante</h1>
      <form className="container-forms" onSubmit={handleSubmit(criarEstabelecimento)}>
        <div className="bloco-2-3">
          <p></p>
          <p></p>
          <p>Nome do Restaurante</p>
          <p></p>
          <input
            {...register("estabelecimento.nome")}
            type="text"
            placeholder="Nome do Restaurante"
          />
          {/* {errors.estabelecimento?.nome?.message && (<p>{errors.estabelecimento?.nome?.message}</p>)} */}
          <p></p>
          <p>Foto Perfil</p>
          <p>Foto Capa</p>
          <input
            type="file"
            accept="image/*"
            {...register("estabelecimento.fotoPerfil")}
            className="format-foto"
          />
          {errors.estabelecimento?.fotoPerfil?.message && (
            <p>{errors.estabelecimento?.fotoPerfil?.message}</p>
          )}
          <input
            type="file"
            accept="image/*"
            {...register("estabelecimento.fotoCapa")}
            className="format-foto"
          />
          {errors.estabelecimento?.fotoCapa?.message && (
            <p>{errors.estabelecimento?.fotoCapa?.message}</p>
          )}
          <p>WhatsApp</p>
          <p>Instagram</p>
          <input
            {...register("estabelecimento.whatsapp")}
            type="text"
            placeholder="WhatsApp"
          />
          <input
            {...register("estabelecimento.instagram")}
            type="text"
            placeholder="Instagram"
          />
        </div>

        <hr className="divisor" />

        <div className="bloco-1">
          <p>CEP</p>
          <input
            {...register("estabelecimento.cep")}
            type="text"
            placeholder="CEP"
            maxLength={9}
          />
        </div>
        <div className="bloco-2-3">
          <p>Rua</p>
          <p>Número</p>
          <input
            {...register("estabelecimento.logradouro")}
            type="text"
            placeholder="Rua"
          />
          <input
            {...register("estabelecimento.numero")}
            type="text"
            placeholder="Número"
          />
          <p>Complemento</p>
          <p>Município</p>
          <input
            {...register("estabelecimento.complemento")}
            type="text"
            placeholder="Complemento"
          />
          <input
            {...register("estabelecimento.bairro")}
            type="text"
            placeholder="Município"
          />
          <p>Cidade</p>
          <p>Estado</p>
          <input
            {...register("estabelecimento.cidade")}
            type="text"
            placeholder="Cidade"
          />
          <input
            {...register("estabelecimento.estado")}
            type="text"
            placeholder="Estado"
          />
        </div>

        <hr className="divisor" />

        <div className="bloco-2-3">
          <p>Categoria</p>
          <p>CNPJ</p>
          <select
            {...register("estabelecimento.estabelecimentoCategoria", {
              setValueAs: (value) => value,
            })}
          >
            {categorias.map((categoria: any) => (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            ))}
          </select>
          {errors.estabelecimento?.estabelecimentoCategoria?.message && (
            <p>{errors.estabelecimento?.estabelecimentoCategoria?.message}</p>
          )}
          <input
            {...register("estabelecimento.cnpj")}
            type="text"
            placeholder="CNPJ"
          />
          <p>
            Senha
            <button onClick={togglePasswordVisibility} type="button">
              <FontAwesomeIcon
                className="password-toggle-icon"
                icon={showPassword ? faEyeSlash : faEye}
              />
            </button>
          </p>
          <p>Confirmar Senha</p>
          <input
            {...register("estabelecimento.senha")}
            type={passwordType}
            placeholder="Senha"
            autoComplete="off"
          />
          <input
            {...register("estabelecimento.validasenha")}
            type={passwordType}
            placeholder="Confirmar Senha"
            autoComplete="off"
          />
        </div>
        <div className="container-botao">
          <button className="botao" type="submit">
            Enviar
          </button>
        </div>
      </form>
      {isLoading && (
        <div className="modal">
          <div className="modal-content">
            <div className="loading"></div>
          </div>
        </div>
      )}
      {!isLoading && successMessage && (
        <div className="modal">
          <div className="modal-content">
            <p className="erro2">{successMessage}</p>
            <button
              onClick={() => {
                redirecionarPagina();
              }}
              className="erro-botao"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="container-erro">
          <div className="erro">
            <p className="erro2">{error}</p>
            <button className="erro-botao">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
