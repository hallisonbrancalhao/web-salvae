import "./header.scss";
import Image from "next/image";
import logo from "/assets/images/logo.svg";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
         <a href="/"> <Image src={logo} width={181} height={10} alt="" /></a>
        </div>
        <div className="links">
          <li><Link href="/">Página Inicial</Link></li>
          <li><Link href="sobre">Sobre Nós</Link></li>
          <li><Link href="perguntas">Dúvidas Frequentes</Link></li>
        </div>
        <button className="botao"><Link href='login'>Logar</Link></button>
      </div>
    </header>
  );
};
