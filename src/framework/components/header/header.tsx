import "./header.scss";
import Image from "next/image";
import logo from "/assets/images/logo.svg";

export const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
         <a href="/"> <Image src={logo} width={181} height={10} alt="" /></a>
        </div>
        <div className="links">
          <li><a href="/">Pagina inicial</a></li>
          <li><a href="sobre">Sobre nos</a></li>
          <li><a href="perguntas">Duvidas Frequentes</a></li>
        </div>
        <button className="botao"><a href="login">Entrar</a></button>
      </div>
    </header>
  );
};
