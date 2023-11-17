import { z } from "zod";

export const schemaFormEstabelecimento = z
  .object({
    estabelecimento: z.object({
      id: z.number(),
      cnpj: z.string().min(14, "Informe um CNPJ válido"),
      nome: z.string().min(1, "Informe um nome válido"),
      senha: z.string().min(1, "Informe uma senha válida"),
      instagram: z.string().min(1, "Informe um instagram válido"),
      whatsapp: z.string().min(1, "Informe um whatsapp válido"),
      fotoPerfil: z.any(),
      fotoCapa: z.any(),
      estabelecimentoCategoria: z.string(),
      // avaliacao: z.number().min(1, "Informe uma avaliação válida"),
      // status: z.boolean(),
      cep: z.string().min(9, "Informe uma rua válida"),
      logradouro: z.string().min(1, "Informe uma rua válida"),
      numero: z.string().min(1, "Informe um número válido"),
      bairro: z.string().min(1, "Informe um bairro válido"),
      complemento: z.string(),
      cidade: z.string().min(1, "Informe uma cidade válida"),
      estado: z.string().min(1, "Informe um estado válido"),
      pais: z.string().min(1, "Informe um país válido"),
    }),
  })
  .transform((field) => ({
    estabelecimento: {
      id: field.estabelecimento.id,
      cnpj: field.estabelecimento.cnpj,
      nome: field.estabelecimento.nome,
      senha: field.estabelecimento.senha,
      instagram: field.estabelecimento.instagram,
      whatsapp: field.estabelecimento.whatsapp,
      fotoPerfil: field.estabelecimento.fotoPerfil,
      fotoCapa: field.estabelecimento.fotoCapa,
      estabelecimentoCategoria: field.estabelecimento.estabelecimentoCategoria,
      // avaliacao: field.estabelecimento.avaliacao,
      // status: field.estabelecimento.status,
      cep: field.estabelecimento.cep,
      logradouro: field.estabelecimento.logradouro,
      numero: field.estabelecimento.numero,
      bairro: field.estabelecimento.bairro,
      complemento: field.estabelecimento.complemento,
      cidade: field.estabelecimento.cidade,
      estado: field.estabelecimento.estado,
      pais: field.estabelecimento.pais,
    },
  }));
