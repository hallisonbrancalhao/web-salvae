import { schemaFormPromocao } from "../schemas/promocao-schema"
import { z } from 'zod'

export type FormPromocaoProps = z.infer<typeof schemaFormPromocao>
