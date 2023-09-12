import React from 'react';
import Image from 'next/image'
import Linha from '../../public/assets/linha-do-tempo.svg'
import Foto from '../../public/assets/timeline.svg'
import TimeLine from './time-line';
import '../global.css';

export default async function Sobre() {
  return (
    <div className='flex h-auto flex-col items-center bg-gradient-to-t from-[#081918] to-[#052C2C]'>
      <h1 className='title'>Sobre nós</h1>
      <div className="line"></div>
      <div className="timeline">
        <div className="timeline-event">
          <div className="timeline-text">
            Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe
            fwoihfw fwoihfw fweoihfw ih.
          </div>
          <div className="timeline-year">2021</div>
          <img src={Foto} alt='' className="timeline-image" />
        </div>
        <div className="timeline-event">
          <div className="timeline-text">
            Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe
            fwoihfw fwoihfw fweoihfw ih.
          </div>
          <div className="timeline-year">2020</div>
          <img src={Foto} alt='' className="timeline-image" />
        </div>
        <div className="timeline-event">
          <div className="timeline-text">
            Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe
            fwoihfw fwoihfw fweoihfw ih.
          </div>
          <div className="timeline-year">2022</div>
          <img src={Foto} alt='' className="timeline-image" />
        </div>
      </div>
    </div>
  );
}
