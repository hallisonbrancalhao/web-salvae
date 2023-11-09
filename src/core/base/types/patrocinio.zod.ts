import { schemaFormPatrocinio } from "../schemas/patrocinio-schema"
import { z } from 'zod'

export type FormPatrocinioProps = z.infer<typeof schemaFormPatrocinio>
