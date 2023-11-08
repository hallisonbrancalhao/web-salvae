import { z } from "zod";

export const schemaFormCupom = z.object({
  cupom: z.object({
    id: z.number(),
    idEstabelecimento: z.number(),
    descricao: z.string().min(1, "Informe uma descrição válida"),
    promocaoCategoria: z.array(z.object({ idCategoriaPromocao: z.number() })),
    promocaoDia: z.array(z.object({ idDiaFuncionamento: z.number() })),
    status: z.boolean(),
  }),
}).transform((field) => ({
  cupom: {
    id: field.cupom.id,
    idEstabelecimento: field.cupom.idEstabelecimento,
    descricao: field.cupom.descricao,
    promocaoCategoria: field.cupom.promocaoCategoria,
    promocaoDia: field.cupom.promocaoDia,
    status: field.cupom.status,
  },
}));
