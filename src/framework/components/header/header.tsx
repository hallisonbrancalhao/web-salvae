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
          <li><Link href="/">Pagina inicial</Link></li>
          <li><Link href="sobre">Sobre nos</Link></li>
          <li><Link href="perguntas">Duvidas Frequentes</Link></li>
        </div>
        <button className="botao"><Link href='login'>Logar</Link></button>
      </div>
    </header>
  );
};
