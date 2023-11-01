import { schemaFormEstabelecimento } from "../schemas/estabelecimento-schema"
import { z } from 'zod'

export type FormEstabelecimentoProps = z.infer<typeof schemaFormEstabelecimento>
