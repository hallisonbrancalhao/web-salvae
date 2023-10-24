import EditarPatrociadorPage from "@/framework/screens/editar-patrocinador/editar-patrocinador-page";
import { PatrocinadorRepository } from "@/services/repositories";

export default async function EditarPatrocinador({ params }: { params: { id: string } }) {
  const patrocinadorID = new PatrocinadorRepository
  const dadosExistente = await patrocinadorID.ListarPorId(params.id)

  return (
    <>
      <EditarPatrociadorPage
        patrocinador={{
          _id: dadosExistente._id, nome: dadosExistente.nome,
          foto: dadosExistente.foto, status: dadosExistente.status
        }}
      />
    </>
  );
}
