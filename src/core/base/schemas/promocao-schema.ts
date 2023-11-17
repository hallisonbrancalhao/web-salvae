import { z } from "zod";

export const schemaFormPromocao = z.object({
  promocao: z.object({
    id: z.number(),
    idEstabelecimento: z.number(),
    descricao: z.string().min(1, "Informe uma descrição válida"),
    promocaoCategoria: z.array(z.object({ idCategoriaPromocao: z.number() })),
    promocaoDia: z.array(z.object({ idDiaFuncionamento: z.number() })),
    status: z.boolean(),
  }),
}).transform((field) => ({
  promocao: {
    id: field.promocao.id,
    idEstabelecimento: field.promocao.idEstabelecimento,
    descricao: field.promocao.descricao,
    promocaoCategoria: field.promocao.promocaoCategoria,
    promocaoDia: field.promocao.promocaoDia,
    status: field.promocao.status,
  },
}));
