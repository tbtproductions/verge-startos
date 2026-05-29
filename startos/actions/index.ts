import { sdk } from '../sdk'
import { setFinnhubKey } from './setFinnhubKey'

export const actions = sdk.Actions.of().addAction(setFinnhubKey)
