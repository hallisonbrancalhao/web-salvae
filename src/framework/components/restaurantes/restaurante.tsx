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
interface RestaurantesProps {
  id: number;
  fotoPerfil: string;
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

  const { excluirEstabelecimento } = useEstabelecimento();

  const handleToggleClick = async () => {
    // await statusEditado.EditarStatus({
    //     _id: _id,
    //     status: !toggleStatus,
    // })
    setToggleStatus(!toggleStatus);
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
          // Se não houver imagem, você pode mostrar um espaço reservado ou mensagem
          <div>Imagem não disponível</div>
        )}
      </div>
      <div className="item-cabecalho2">{nome}</div>
      <div className="item-cabecalho2">{avaliacao}</div>
      <div className="item-cabecalho2">
        <FontAwesomeIcon
          icon={toggleIcon}
          className={toggleStatus ? "ativado" : "desativado"}
          onClick={handleToggleClick}
        />
      </div>
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
