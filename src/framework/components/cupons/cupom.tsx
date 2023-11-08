"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'
import Link from 'next/link';
import '../../screens/dash-restaurantes/styles.scss'
import useCupom from '@/core/hooks/cupom-hook'
interface CuponsProps {
    id: string
    nome: string
    status: boolean
}

const Cupom: React.FC<CuponsProps> = ({ id, nome, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);
    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const handleToggleClick = async () => {
        // await statusEditado.EditarStatus({
        //     _id: _id,
        //     status: !toggleStatus,
        // })
        setToggleStatus(!toggleStatus);
    };

    const { excluirCupom } = useCupom();

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        await excluirCupom(id);
        setShowConfirmModal(false);
        window.location.reload();
    };

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
    };

    return (
        <div className="container-componente">
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
                <Link href={`/editar-cupom/${id}`}>
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
