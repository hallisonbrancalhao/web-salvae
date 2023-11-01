import { z } from "zod";

export const schemaFormCupom = z
  .object({
    cupom: z.object({
      restaurante: z.number().min(1, "Informe um restaurante válido"),
      nome: z.string().min(1, "Informe um nome válido"),
      sobre: z.string().min(1, "Informe uma descrição válida"),
      foto: z.string().min(1, "Informe uma foto válida"),
      categoria: z.object({
        id: z.number(),
      }),
      // dias: z.array(z.boolean()),
      status: z.boolean(),
    }),
  })
  .transform((field) => ({
    cupom: {
      restaurante: field.cupom.restaurante,
      nome: field.cupom.nome,
      sobre: field.cupom.sobre,
      foto: field.cupom.foto,
      categoria: field.cupom.categoria,
      // dias: field.cupom.dias,
      status: field.cupom.status,
    },
  }));
