import { z } from "zod";

export const schemaFormCupom = z.object({
  cupom: z.object({
    codigo: z.string().min(1, "Informe um código válido"),
  }),
}).transform((field) => ({
  cupom: {
    codigo: field.cupom.codigo,
  },
}));
