'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";
import Logo from "assets/images/logo.svg";
import Ios from "assets/images/ios.svg";
import Play from "assets/images/play.svg";
import Phone from "assets/images/img-phone.svg";
import Parceiro1 from "assets/images/parceiro1.svg";
import Parceiro2 from "assets/images/parceiro2.svg";
import Olho from "assets/images/olho.svg";
import Carrocel from "assets/images/carrocel.svg";
import Pizzaa from "assets/images/pizzaa.svg";
import Reipipe from "assets/images/reipide.svg";
import Cookie from "assets/images/cookeis.svg";
import Expreme from "assets/images/expreme.svg";

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <>
      <div>
        <div className="fundo">
          <div className="fundo-inicial">
            <div className="fundo-inicial__frase-impacto">
              <h1>O Maior Tour Gastronômico</h1>
            </div>
            <div className="fundo-inicial__frase-impacto">
              <h1>de Maringá.</h1>
            </div>
            <div className="fundo-inicial__sub-texto">
              <h3>
                Um Tour Gastronômico pela nossa cidade que te dá 1 prato em dobro em mais de 100 estabelecimentos selecionados,
                <p>o que te garante uma economia de aproximadamente R$ 7 mil.</p>
              </h3>
            </div>
            <div className="fundo-inicial__aplicativos ">
              <Image src={Play} width={239} height={80} alt="" />
              <Image src={Ios} width={270} height={80} alt="" />
            </div>
            <div className="fundo-inicial__como-funciona">
              <h1>Como funciona o</h1>
              <div className="imagem">
                <Image src={Logo} width={226} height={100} alt="" />
              </div>
            </div>
            {showVideo && (
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0_AR7giN0CU?si=06roeGzE4Zw4MQgr"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>
            )}
          </div>
          {/*<div className="restaurantes">
             <div className="fundo-2">
              <div className="frase-3">
                <h1>
                  Desconto para todos <p>os tipos de comida</p>
                </h1>
              </div>
              <div className="tabela-olho-container">
                <div className="tabela-olho">
                  <table>
                    <tbody>
                      <tr>
                        <td className="olho">
                          <Image src={Olho} width={50} height={50} alt="" />
                        </td>
                        <td>
                          veja as categorias dos restaurantes{" "}
                          <p>que temos desconto</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> 
          </div>
          <div className="carrocel">
            <Image src={Carrocel} width={223} height={334} alt="" />
            <Image src={Carrocel} width={223} height={334} alt="" />
            <Image src={Carrocel} width={223} height={334} alt="" />
            <Image src={Carrocel} width={223} height={334} alt="" />
            <Image src={Carrocel} width={223} height={334} alt="" />
          </div>*/}
          {/* Seção 3 */}
          <div className="parceiros">
            <div className="parceiros__frase">
              <h1>Conheça nossos parceiros</h1>
            </div>
            <div className="parceiros__imagens-parceiros">
              <Image src={Parceiro1} width={148} height={135} alt="" />
              <Image src={Parceiro2} width={126} height={126} alt="" />
              <Image src={Pizzaa} width={126} height={126} alt="" />
              <Image src={Reipipe} width={126} height={126} alt="" />
              <Image src={Cookie} width={126} height={126} alt="" />
              <Image src={Expreme} width={126} height={126} alt="" />
            </div>
          </div>

          {/* Seção 4 */}
          <div className="container-bg">
            <div className="container-bg__campo-clpl">
              <div className="container-bg__celular">
                <Image src={Phone} width={338} height={100} alt=""/>
              </div>
              <div className="container-bg__teste">
                <div className="container-bg__logo">
                  <Image src={Logo} width={271} height={120} alt="" />
                </div>
                <div className="container-bg__aplicativos">
                  <h1>Baixe já o app e aproveite!</h1>
                </div>
                <div className="container-bg__mobile">
                  <Image src={Play} width={239} height={80} alt="" />
                  <Image src={Ios} width={270} height={80} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  );
}
