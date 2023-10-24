'use client'
import "./styles.scss";
import Logo from "/assets/images/logo.svg";
import Image from "next/image";
import "src/app/globals.css";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <button
        type="button"
        className="responsive-sideBar"
        onClick={toggleSidebar}
      >
        <span className="responsive-sideBar__open">Open sidebar</span>
        <svg
          className="responsive-sideBar__lines"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside className={`aside ${isSidebarOpen ? "open" : ""}`}>
        <div className="container-sidebar">
          <div className="container-sidebar__image">
            <Image src={Logo} width={235} height={97} alt="Logo Salvae" />
          </div>
          <div className="container-sidebar__links">
            <ul>
              <li><a href="restaurantes">Restaurantes</a></li>
              <li><a href="cupom">Cupons</a></li>
              <li><a href="patrocinador">Patrocinadores</a></li>
              <li>Sair</li>
            </ul>
          </div>
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
      </aside>
    </>
  );
}