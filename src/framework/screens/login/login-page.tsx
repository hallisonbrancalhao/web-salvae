"use client"
import Image from "next/image";
import "./styles.scss";

import useLogin from "@/core/hooks/login-hook";

export default function Login() {
  const { cnpj, setCnpj, senha, setSenha, handleLogin, error, setError } =
    useLogin();

  return (
    <div className="container">
      <header className="header">
        <Image
          src={"/assets/images/logo.svg"}
          alt=""
          width={452}
          height={192}
          className="logo"
        />
      </header>
      <main className="main">
        <div className="usuario">
          <label htmlFor="usuario">Usuário:</label>
        </div>
        <div className="form">
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className="input"
          />
        </div>
        <div className="usuario">
          <label htmlFor="senha">Senha:</label>
        </div>
        <div className="form">
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input"
          />
        </div>
        <div className="container-botao">
          <button onClick={handleLogin} className="botao">
            Entrar
          </button>
        </div>
        {error && (
          <div className="container-erro">
            <div className="erro">
              <p className="erro2">{error}</p>
              <button onClick={() => setError("")} className="erro-botao">
                Fechar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
