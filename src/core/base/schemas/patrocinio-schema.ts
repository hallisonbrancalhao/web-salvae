import { z } from "zod";

export const schemaFormPatrocinio = z.object({
  patrocinio: z.object({
    id: z.number(),
    nome: z.string(),
    banner: z.string(),
    status: z.boolean(),
  }),
}).transform((field) => ({
  patrocinio: {
    id: field.patrocinio.id,
    nome: field.patrocinio.nome,
    banner: field.patrocinio.banner,
    status: field.patrocinio.status,
  },
}));
