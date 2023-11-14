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
                            timeLineText='Em 2021, o Maringá Gastronômica lança a primeira edição do Salvaê com o objetivo de 
                            fomentar o setor de bares e restaurantes de Maringá, afetado pela pandemia. Pouco tempo depois, se 
                            consolida o maior perfil de dicas da cidade com mais de 100 mil seguidores. '
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
                            timeLineText='Em maio de 2018, Felipe e Elvis criaram o Maringá Gastronômica para mostrar suas 
                            aventuras gastronômicas por Maringá e em pouco tempo ganharam a confiança e o prestígio dos maringaenses.'
                            ano='2018'
                            foto={Foto}
                        />
                    </div>
                    <div className="linha3">
                        <TimeLine
                            timeLineText='Em 2023, o Maringá Gastronômica caminhou para um rebranding com o objetivo de expandir horizontes. 
                            O perfil, que nasceu compartilhando dicas gastronômicas, se tranforma em um perfil de dicas gerais para os 
                            maringaenses e visam explorar o mundo. Junto com a mudança, vem o lançamento do aplicativo do Salvaê'
                            ano='2023'
                            foto={Foto}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
