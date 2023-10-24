"use client"
import * as React from 'react'
import Image from 'next/image'
import '../../screens/sobre/styles.scss'

interface TimeLineTextProps {
    ano: string
    timeLineText: string
    foto: string
}   

const TimeLine: React.FC<TimeLineTextProps> = ({ timeLineText, ano, foto }) => {
    return (
        <><div className="container-componente">
            <div className="componente-ano">{ano}</div>
            <div className="componente-imagem">
                <Image src={foto} alt='' width={2} height={2} className="imagem" />
            </div>
            <div className="componente-texto">{timeLineText}</div>
        </div>
        </>
    )
}

export default TimeLine;
