import { schemaFormCupom } from "../schemas/cupom-schema"
import { z } from 'zod'

export type FormCupomProps = z.infer<typeof schemaFormCupom>
