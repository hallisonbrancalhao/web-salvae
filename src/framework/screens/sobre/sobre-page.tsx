import React from 'react';
import Image from 'next/image'
import Linha from '../../../../assets/images/linha-do-tempo.svg'
import Foto from '../../../../assets/images/timeline.svg'
import TimeLine from '../../components/sobre/time-line';
import './styles.scss'

export default function Sobre() {
    return (
        <div className="container">
            <h1 className='sobrenos'>Sobre nós</h1>
            <div className="divisor"></div>
            <div className="container-timeline">
                <div className="timeline">
                    <div className="linha1">
                        <TimeLine
                            timeLineText='Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe 
                            fwoihfw fwoihfw  fweoihfw ih.'
                            ano='2021'
                            foto={Foto}
                        />
                    </div>
                </div>
                <div>
                    <Image src={Linha} alt='' width={100} height={100} className="imagem-linha" />
                </div>
                <div className="timeline">
                    <div className="linha2">
                        <TimeLine
                            timeLineText='Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe 
                            fwoihfw fwoihfw  fweoihfw ih.'
                            ano='2020'
                            foto={Foto}
                        />
                    </div>
                    <div className="linha3">
                        <TimeLine
                            timeLineText='Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe 
                            fwoihfw fwoihfw  fweoihfw ih.'
                            ano='2022'
                            foto={Foto}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
