import React from 'react';
import Image from 'next/image';
import './styles.scss';

export const BannerInicial = () => {
    return (
        <div>
            {/* Seção 1 */}
            <div className="fundo-inicial">
                <div className="frase-impacto">
                    <h1>Frase de impacto</h1>
                </div>
                <div className='sub-texto my-10'>
                    <h3>
                        Lorem ipsum dolor sit amet,
                        <p>consectetur adipiscing elit. Mauris semper nisl nec neque egestas,</p>
                        <p>nec pharetra massa accumsan.</p>
                    </h3>
                </div>
                <div className="aplicativos flex gap-32 my-12">
                    <Image src="/play.svg" width={239} height={80} alt="" />
                    <Image src="/ios.svg" width={270} height={80} alt="" />
                </div>
            </div>
            <div className="fundo-inicial">
                <div className="flex gap-6">
                    <h1 className="text-center text-[#FFB133] text-[80px]">Como funcioona o</h1>
                    <div className="py-4 ">
                    <Image src="logo.svg" width={226} height={100} alt="" />
                    </div>
                </div>
            </div>

            {/* Seção 2 */}
            <div className='fundo-2'>
                <div className="frase-3">
                    <h1>Desconto para todos <p>os tipos de comida</p></h1>
                </div>
                <div className="sub-texto-2">
                    <table>
                        <tbody>
                            <tr>
                                <td className='items-center'>olho</td>
                                <td>veja as categorias dos restaurantes <p>que temos desconto</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Seção 3 */}
            <div className='fundo-inicial'>
                <div className='frase-2'>
                    <h1>Conheça nossos parceiros</h1>
                </div>
            </div>

            {/* Seção 4 */}
            <div className='bg-[#081918]'>
                <div className="bg-[url('/bg-bottom.svg')] bg-cover">
                    <div className="flex items-center justify-between ">
                        <div className="ml-10">
                            <Image src="/img-phone.svg" width={270} height={80} alt="" />
                        </div>
                        <div className="">
                            <div className="ml-44">
                                <Image src="logo.svg" width={271} height={120} alt="" />
                                <div className="text-center mr-72 text-[44px] font-mono mt-10">
                                    <h1>Baixe já o app e aproveite!</h1>
                                </div>
                            </div>
                            <div className="flex gap-32  py-16 mr-32">
                                <Image src="/play.svg" width={239} height={80} alt="" />
                                <Image src="/ios.svg" width={270} height={80} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerInicial;
