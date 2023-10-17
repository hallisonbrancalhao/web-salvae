import Image from "next/image";
import "./styles.scss";
import Logo from "assets/images/logo.svg";
import Ios from "assets/images/ios.svg";
import Play from "assets/images/play.svg";
import Phone from "assets/images/img-phone.svg";
import Parceiro1 from "assets/images/parceiro1.svg";
import Parceiro2 from "assets/images/parceiro2.svg";
import Olho from "assets/images/olho.svg";

export default function HomePage() {


  return (
    <>
      <div>
        {/* Seção 1 */}
        <div className="fundo">

          <div className="fundo-inicial">
            <div className="fundo-inicial__frase-impacto">
              <h1>Frase de impacto</h1>
            </div>
            <div className="fundo-inicial__sub-texto">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper
                <p>nisl nec neque egestas, nec pharetra massa accumsan.</p>

              </h3>
            </div>
            <div className="fundo-inicial__aplicativos ">
              <Image src={Play} width={239} height={80} alt="" />
              <Image src={Ios} width={270} height={80} alt="" />
            </div>
            <div className="fundo-inicial__como-funciona">
              <h1>Como funcioona o</h1>
              <div className="imagem">
                <Image src={Logo} width={226} height={100} alt="" />

              </div>
            </div>
          </div>


          {/* Seção 2 */}
          <div className="fundo-2">
            <div className="frase-3">
              <h1>
                Desconto para todos <p>os tipos de comida</p>
              </h1>
            </div>
            <div className="sub-texto-2">
              <table>
                <tbody>
                  <tr>
                    <td className="items-center">
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

          {/* Seção 3 */}
          <div className="parceiros">
            <div className="parceiros__frase">
              <h1>Conheça nossos parceiros</h1>
            </div>
            <div className="parceiros__imagens-parceiros">
              <Image src={Parceiro1} width={157} height={130} alt="" />
              <Image src={Parceiro2} width={157} height={130} alt="" />
            </div>
          </div>

          {/* Seção 4 */}
          <div className="container-bg">
            <div className="container-bg__campo-clpl">
              <div className="container-bg__celular">
                <Image src={Phone} width={270} height={80} alt="" />
              </div>
              <div className="container-bg__teste">
                <div className="container-bg__logo">
                  <Image src={Logo} width={226} height={100} alt="" />
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
