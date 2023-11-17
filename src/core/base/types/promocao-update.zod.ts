import { schemaFormUpdatePromocao } from "../schemas/promocao-update-schema"
import { z } from 'zod'

export type FormPromocaoUpdateProps = z.infer<typeof schemaFormUpdatePromocao>
