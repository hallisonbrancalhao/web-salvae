import EditarCupomPage from "@/framework/screens/editar-cupom/editar-cupom-page";

export default async function EditarCupom({ params }: { params: { id: string } }) {
  const id = params.id
  return (
    <>
      <EditarCupomPage id={id} />
    </>
  )
}
