import { z } from "zod";

export const schemaFormEstabelecimento = z
  .object({
    estabelecimento: z.object({
      cnpj: z.string().min(14, "Informe um CNPJ válido"),
      nome: z.string().min(1, "Informe um nome válido"),
      senha: z.string().min(1, "Informe uma senha válida"),
      instagram: z.string().min(1, "Informe um instagram válido"),
      whatsapp: z.string().min(1, "Informe um whatsapp válido"),
      fotoPerfil: z.string().min(1, "Informe uma foto de perfil válida"),
      fotoCapa: z.string().min(1, "Informe uma foto de capa válida"),
      categoria: z.string(),
      // avaliacao: z.number().min(1, "Informe uma avaliação válida"),
      // status: z.boolean(),
      endereco: z.object({
        cep: z.string().min(9, "Informe uma rua válida"),
        logradouro: z.string().min(1, "Informe uma rua válida"),
        numero: z.string().min(1, "Informe um número válido"),
        bairro: z.string().min(1, "Informe um bairro válido"),
        complemento: z.string(),
        cidade: z.string().min(1, "Informe uma cidade válida"),
        estado: z.string().min(1, "Informe um estado válido"),
        pais: z.string().min(1, "Informe um país válido"),
      }),
    }),
  })
  .transform((field) => ({
    estabelecimento: {
      cnpj: field.estabelecimento.cnpj,
      nome: field.estabelecimento.nome,
      senha: field.estabelecimento.senha,
      instagram: field.estabelecimento.instagram,
      whatsapp: field.estabelecimento.whatsapp,
      fotoPerfil: field.estabelecimento.fotoPerfil,
      fotoCapa: field.estabelecimento.fotoCapa,
      categoria: field.estabelecimento.categoria,
      // avaliacao: field.estabelecimento.avaliacao,
      // status: field.estabelecimento.status,
      endereco: {
        cep: field.estabelecimento.endereco.cep,
        logradouro: field.estabelecimento.endereco.logradouro,
        numero: field.estabelecimento.endereco.numero,
        bairro: field.estabelecimento.endereco.bairro,
        complemento: field.estabelecimento.endereco.complemento,
        cidade: field.estabelecimento.endereco.cidade,
        estado: field.estabelecimento.endereco.estado,
        pais: field.estabelecimento.endereco.pais,
      },
    },
  }));
