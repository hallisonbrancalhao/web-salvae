"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'

interface RestaurantesProps {
    foto: string
    nome: string
    avaliacao: number
    status: boolean
}

const Restaurante: React.FC<RestaurantesProps> = ({ foto, nome, avaliacao, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);

    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const handleToggleClick = () => {
        setToggleStatus(!toggleStatus);
    };

    return (
        <div className="container-componente">
            <><div className="item-cabecalho2">
                <Image src={foto} alt='' />
            </div>
                <div className="item-cabecalho2">
                    {nome}
                </div>
                <div className="item-cabecalho2">
                    {avaliacao}
                </div>
                <div className="item-cabecalho2">
                    <FontAwesomeIcon
                        icon={toggleIcon}
                        className={toggleStatus ? 'ativado' : 'desativado'}
                        onClick={handleToggleClick}
                        style={{ fontSize: '32px' }}
                    />
                </div>
                <div className="item-cabecalho2">
                    <a href="#">
                        <Image src={Editar} alt='' style={{ width: '32x', height: '32px' }} />
                    </a>
                    <a href="#">
                        <Image src={Excluir} alt='' style={{ width: '32px', height: '32px' }} />
                    </a>
                </div>
            </>
        </div>
    )
}

export default Restaurante;
