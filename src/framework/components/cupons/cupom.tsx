"use client"
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Editar from '../../../../assets/images/editar.svg'
import Excluir from '../../../../assets/images/excluir.svg'
import Link from 'next/link';
import '../../screens/dash-restaurantes/styles.scss'
import usePromocao from '@/core/hooks/promocao-hook'

interface CuponsProps {
    id: number
    nome: string
    status: boolean
}

const Cupom: React.FC<CuponsProps> = ({ id, nome, status }) => {
    const [toggleStatus, setToggleStatus] = useState(status);
    const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

    const { excluirCupom, listarCupomPorId, editarCupom, promocao } = usePromocao();

    const fetchData = useCallback(async () => {
        await listarCupomPorId(id);
    }, [listarCupomPorId, id])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleToggleClick = async () => {
        if (!promocao) return;
        const novoStatus = !toggleStatus;
        setToggleStatus(novoStatus);
        promocao.status = novoStatus;
        console.log(promocao.status)

        const promocaoAtualizada = {
            promocao: {
                id: promocao.id,
                idEstabelecimento: promocao.idEstabelecimento,
                descricao: promocao.descricao,
                promocaoCategoria: promocao.promocaoCategoria,
                promocaoDia: promocao.promocaoDia,
                status: novoStatus,
            },
        };
        editarCupom(promocaoAtualizada);
    };

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
                <Link href={`/editar-promocao/${id}`}>
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
