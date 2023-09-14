import Image from "next/image";
import "./styles.scss";

export default function LoginPage() {
  return (
    <section className="section-container">
      <div className="section-content">
        <a href="#" className="logo-container">
          salvAE
        </a>
        <div className="form-container">
          <div className="form-inner">
            <h1 className="form-title">Faça o login em sua conta</h1>
            <form className="form-fields" action="#">
              <div className="email-container">
                <label htmlFor="email" className="email-label">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email-input"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="password-container">
                <label htmlFor="password" className="password-label">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password-input"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="misc-container">
                <div className="checkbox-container">
                  <input
                    id="remember"
                    type="checkbox"
                    className="remember-checkbox"
                    required
                  />
                  <label htmlFor="remember" className="remember-label">
                    Lembrar-me
                  </label>
                </div>
                <a href="#" className="forgot-password">
                  Esqueceu sua senha?
                </a>
              </div>
              <button type="submit" className="submit-button">
                Entrar
              </button>
              <p className="signup-text">
                Não tem conta ainda?{" "}
                <a href="#" className="signup-link">
                  Registrar
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
