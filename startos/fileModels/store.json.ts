import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  finnhubKey: z.string().optional(),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: './store.json' },
  shape,
)
