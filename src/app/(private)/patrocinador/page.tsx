import Patrocinadores from "@/framework/screens/patrocinador-page/patrocinador-page";
import { PatrocinadorRepository } from "@/services/repositories/patrocinador.repository";

export default async function Restaurante() {
  const patrocinadorRepository = new PatrocinadorRepository
  const patrocinador = await patrocinadorRepository.Listar()
  return (
    <section>
      <Patrocinadores
        patrocinador={patrocinador} />
    </section>
  );
}
