import EditarRestaurantesPage from "@/framework/screens/editar-restaurantes/editar-restaurantes-page";

export default async function EditarRestaurantes({ params }: { params: {id: string}}) {
  const id = params.id
  return (
    <>
      <EditarRestaurantesPage id={id}/>
    </>
  );
}
