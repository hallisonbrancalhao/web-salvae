import "./header.scss";
import Image from "next/image";
import logo from "/assets/images/logo.svg";

export const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <Image src={logo} width={181} height={10} alt="" />
        </div>
        <div className="links">
          <li>Pagina inicial</li>
          <li>Sobre nos</li>
          <li>Duvidas Frequentes</li>
        </div>
        <button className="botao">Entrar</button>
      </div>
    </header>
  );
};
