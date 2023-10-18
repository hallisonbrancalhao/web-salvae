import "./styles.scss";
import Link from "next/link";
import Logo from "/assets/images/logo.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="aside">
      <div className="container-sidebar">
        <div className="container-sidebar__image">
          <Image src={Logo} width={235} height={97} alt="Logo Salvae" />
        </div>
        <div className="container-sidebar__links">
          <ul>
            <li>Dashbord</li>
            <li>Cadastro Restuarante</li>
            <li>Cadastro Cupom</li>
            <li>Vizualizar patrocinador</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
