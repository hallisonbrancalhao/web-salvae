import EditarPromocaoPage from "@/framework/screens/editar-promocao/editar-promocao-page";

export default async function EditarCupom({ params }: { params: { id: string } }) {
  const id = params.id
  return (
    <>
      <EditarPromocaoPage id={id} />
    </>
  )
}
