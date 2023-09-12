import React from 'react';
import Image from 'next/image'
import Linha from '../../public/assets/linha-do-tempo.svg'
import Foto from '../../public/assets/timeline.svg'
import TimeLine from './time-line';

export default async function Sobre() {
    return (
        <div className='flex h-auto flex-col items-center bg-gradient-to-t from-[#081918] to-[#052C2C]'>
            <h1 className='font-black text-[80px] text-[#FFB133] mt-10'>Sobre nós</h1>
            <div className="w-[390px] h-[7px] bg-[#ffb133] rounded-lg"></div>
            <div className="flex justify-center w-full">
                <div className="w-auto">
                    <div className="justify-end mt-[590px]">
                        <TimeLine
                            timeLineText='Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe 
                            fwoihfw fwoihfw  fweoihfw ih.'
                            ano='2021'
                            foto={Foto}
                        />
                    </div>
                </div>
                <div className="">
                    <Image src={Linha} alt='' width={100} height={100} className="w-10 h-[1700px]" />
                </div>
                <div className="w-auto">
                    <div className="justify-start mt-[90px]">
                        <TimeLine
                            timeLineText='Neste ano o guia maringa gastronomica doaijfjw foiew fowihoiwhn fwoihfwe 
                            fwoihfw fwoihfw  fweoihfw ih.'
                            ano='2020'
                            foto={Foto}
                        />
                    </div>
                    <div className="justify-start mt-[640px]">
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
