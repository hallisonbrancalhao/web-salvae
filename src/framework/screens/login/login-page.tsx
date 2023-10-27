"use client";
import Image from "next/image";
import "./styles.scss";

import useLogin from "@/core/hooks/login-hook";

export default function Login() {
  const { cnpj, setCnpj, senha, setSenha, handleLogin, error, setError } =
    useLogin();

  return (
    <section className="section-login">
      <div className="container-login">
        <header className="container-login__header">
          <Image
            src={"/assets/images/logo.svg"}
            alt="Logo SalvAE"
            width={452}
            height={192}
            className="container-login__header__logo"
          />
        </header>
        <main className="container-login__main">
          <div className="container-login__main__content">
            <form className="container-login__main__content__form">
              <div>
                <label htmlFor="usuario">Usuário</label>
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  placeholder="Digite seu CNPJ"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <button onClick={handleLogin}>Entrar</button>
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
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
