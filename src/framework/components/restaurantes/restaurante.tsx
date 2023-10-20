"use client"
import { ReactComponentElement, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'
import '../../screens/restaurantes-page/styles.scss'
interface RestaurantesProps {
    fotoPerfil: string
    nome: string
    avaliacao: number
    status: boolean
}

const Restaurante: React.FC<RestaurantesProps> = ({ fotoPerfil, nome, avaliacao, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);
    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const handleToggleClick = () => {
        setToggleStatus(!toggleStatus);
    };

    return (
        <div className="container-componente">
                <div className="item-cabecalho2">
                    <Image src={fotoPerfil} alt='' width={100} height={100} />
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
                    />
                </div>
                <div className="item-cabecalho2">
                    <a href="/editar-restaurante">
                        <Image src={Editar} alt='' style={{ width: '32x', height: '32px' }} />
                    </a>
                    <a href="/editarcupom">
                        <Image src={Excluir} alt='' style={{ width: '32px', height: '32px' }} />
                    </a>
                </div>
        </div>
    )
}

export default Restaurante;
