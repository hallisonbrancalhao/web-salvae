"use client"
import * as React from 'react'
import Image from 'next/image'

interface TimeLineTextProps {
    ano: string
    timeLineText: string
    foto: string
}   

const TimeLine: React.FC<TimeLineTextProps> = ({ timeLineText, ano, foto }) => {
    return (
        <><div className="w-[500px] text-start px-20">
            <div className="text-[#FFFFFF] font-black text-[50px] mb-2">{ano}</div>
            <div className="bg-[#051918] text-[#A3B8B8] rounded-2xl mb-2">
                <Image src={foto} alt='' width={2} height={2} className="w-full h-auto rounded-lg" />
            </div>
            <div className="text-[#A3B8B8] text-sm">{timeLineText}</div>
        </div>
        </>
    )
}

export default TimeLine;
