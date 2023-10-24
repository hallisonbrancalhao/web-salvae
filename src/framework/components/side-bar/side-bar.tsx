import "./styles.scss";
import Logo from "/assets/images/logo.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside>
      <div className="container-sidebar">
        <div className="container-sidebar__image">
          <Image src={Logo} width={235} height={97} alt="Logo Salvae" />
        </div>
        <div className="container-sidebar__links">
          <ul>
            <li><a href="/restaurantes">Dashbord Restaurantes</a></li>
            <li><a href="/cadastrar-restaurante">Cadastro Restaurantes</a></li>
            <li><a href="/cadastrar-cupom">Cadastro Cupom</a></li>
            <li>Vizualizar patrocinador</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
