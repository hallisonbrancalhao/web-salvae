"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import Editar from "../../../../assets/images/editar.svg";
import Excluir from "../../../../assets/images/excluir.svg";
import Link from "next/link";
import "../../screens/dash-restaurantes/styles.scss";
import useEstabelecimento from "@/core/hooks/estabelecimento-hook";
import { useRouter } from "next/navigation";
import { File } from "buffer";

interface RestaurantesProps {
  id: number;
  fotoPerfil: File;
  nome: string;
  avaliacao: number;
  status: boolean;
}

const Restaurante: React.FC<RestaurantesProps> = ({
  id,
  fotoPerfil,
  nome,
  avaliacao,
  status,
}) => {
  const { refresh } = useRouter();
  const [toggleStatus, setToggleStatus] = useState(status);
  const toggleIcon = toggleStatus ? faToggleOn : faToggleOff;

  const { excluirEstabelecimento, listarEstabelecimentoPorId, editarEstabelecimento, estabelecimento } = useEstabelecimento();

  const handleToggleClick = async () => {
    if (!estabelecimento) return;
    const novoStatus = !toggleStatus;
    setToggleStatus(novoStatus);
    estabelecimento.status = novoStatus;
    console.log(estabelecimento.status)

    const estabelecimentoAtualizado = {
      estabelecimento: {
            id: estabelecimento.id,
            status: novoStatus,
        },
    };
    editarEstabelecimento(estabelecimentoAtualizado);
};

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    await excluirEstabelecimento(id);
    setShowConfirmModal(false);
    location.reload();
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="container-componente">
      <div className="item-cabecalho2">
        {fotoPerfil ? (
          <img src={fotoPerfil} alt={nome} width={100} height={100} />
        ) : (
          <div>Imagem não disponível</div>
        )}
      </div>
      <div className="item-cabecalho2">{nome}</div>
      {/* <div className="item-cabecalho2">{avaliacao}</div> */}
      {/* <div className="item-cabecalho2">
        <FontAwesomeIcon
          icon={toggleIcon}
          className={toggleStatus ? "ativado" : "desativado"}
          onClick={handleToggleClick}
        />
      </div> */}
      <div className="item-cabecalho2">
        <Link href={`/editar-restaurante/${id}`}>
          <Image src={Editar} alt="" style={{ width: "32x", height: "32px" }} />
        </Link>
        <button onClick={handleDeleteClick}>
          <Image
            src={Excluir}
            alt=""
            style={{ width: "32px", height: "32px" }}
          />
        </button>
      </div>
      {showConfirmModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Deseja realmente excluir este restaurante?</p>
            <button onClick={handleCancelDelete}>Cancelar</button>
            <button onClick={handleConfirmDelete}>Confirmar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurante;
