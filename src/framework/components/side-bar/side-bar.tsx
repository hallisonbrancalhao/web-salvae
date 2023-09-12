import "./styles.scss";
import Link from "next/link";
import Logo from "/assets/images/logo.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    // <div className="sidebar">
    //   <div className="sidebar__logo">
    //     <Image src={Logo} width={235} height={97} alt="" />
    //   </div>
    //   <div className="sidebar__links">
    //     <ul>
    //       <li>
    //         Dashbord
    //       </li>
    //       <li>
    //         Cadastro Restuarante
    //       </li>
    //       <li>
    //         Cadastro Cupom
    //       </li>
    //       <li>
    //         Vizualizar patrocinador
    //       </li>
    //       <li>
    //         Sair
    //       </li>
    //     </ul>
    //   </div>

    // </div>
    <>
      <div className="container">
        <div className="container__image">
          <Image src={Logo} width={235} height={97} alt="Logo Salvae" />
        </div>
        <div className="container__links">
          <ul>
            <li>
              Dashbord
            </li>
            <li>
              Cadastro Restuarante
            </li>
            <li>
              Cadastro Cupom
            </li>
            <li>
              Vizualizar patrocinador
            </li>
            <li>
              Sair
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
