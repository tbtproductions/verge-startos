import { sdk } from '../sdk'

export const onInstall = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return
  await effects.action.createTask({
    replayId: 'finnhub-key-setup',
    packageId: 'verge',
    actionId: 'set-finnhub-key',
    severity: 'important',
    reason: 'Set your Finnhub API key to enable stock price tracking. Optional — Bitcoin and crypto work without it. Get a free key at finnhub.io',
  })
})
