"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'
import Link from 'next/link';
import '../../screens/dash-restaurantes/styles.scss'
import { CupomRepository } from '@/services/repositories'
interface CuponsProps {
    _id: string
    foto: string
    nome: string
    status: boolean
}

const Cupom: React.FC<CuponsProps> = ({ _id, foto, nome, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);
    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const statusEditado = new CupomRepository()
    const handleToggleClick = async () => {
        // await statusEditado.EditarStatus({
        //     _id: _id,
        //     status: !toggleStatus,
        // })
        setToggleStatus(!toggleStatus);
    };

    const cupomExcluir = new CupomRepository()
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        await cupomExcluir.Deletar(_id);
        setShowConfirmModal(false);
        window.location.reload();
    };

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
    };

    return (
        <div className="container-componente">
            <div className="item-cabecalho2">
                <Image src={foto} alt='' width={100} height={100} />
            </div>
            <div className="item-cabecalho2">
                {nome}
            </div>
            <div className="item-cabecalho2">
                <FontAwesomeIcon
                    icon={toggleIcon}
                    className={toggleStatus ? 'ativado' : 'desativado'}
                    onClick={handleToggleClick}
                />
            </div>
            <div className="item-cabecalho2">
                <Link href={`/editar-cupom/${_id}`}>
                    <Image src={Editar} alt='' style={{ width: '32x', height: '32px' }} />
                </Link>
                <button onClick={handleDeleteClick}>
                    <Image src={Excluir} alt="" style={{ width: '32px', height: '32px' }} />
                </button>
            </div>
            {showConfirmModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Deseja realmente excluir este cupom?</p>
                        <button onClick={handleCancelDelete}>Cancelar</button>
                        <button onClick={handleConfirmDelete}>Confirmar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cupom;
