"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'
import Link from 'next/link';
import '../../screens/restaurantes-page/styles.scss'
import { EstabelecimentoRepository } from '@/services/repositories'
interface RestaurantesProps {
    _id: string
    fotoPerfil: string
    nome: string
    avaliacao: number
    status: boolean
}

const Restaurante: React.FC<RestaurantesProps> = ({ _id, fotoPerfil, nome, avaliacao, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);
    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const handleToggleClick = () => {
        setToggleStatus(!toggleStatus);
    };
    
    const restauranteExcluir = new EstabelecimentoRepository()
    const DeletarDados = async () => {
        restauranteExcluir.Deletar(_id)
    }

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
                    <Link href="/editar-restaurante">
                        <Image src={Editar} alt='' style={{ width: '32x', height: '32px' }} />
                    </Link>
                    <a href="/restaurantes">
                        <Image src={Excluir} alt='' style={{ width: '32px', height: '32px' }} onClick={DeletarDados}/>
                    </a>
                </div>
        </div>
    )
}

export default Restaurante;
