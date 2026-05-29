import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { setFinnhubKey } from '../actions/setFinnhubKey'

export const current = VersionInfo.of({
  version: '2.0.0:7',
  releaseNotes: {
    en_US: 'Bumps start-sdk → 1.5.3.',
    es_ES: 'Actualiza start-sdk → 1.5.3.',
    de_DE: 'Aktualisiert start-sdk → 1.5.3.',
    pl_PL: 'Aktualizuje start-sdk → 1.5.3.',
    fr_FR: 'Met à jour start-sdk → 1.5.3.',
  },
  migrations: {
    up: async ({ effects }) => {
      // Create an important task prompting user to set Finnhub key for stock prices
      await effects.action.createTask({
        replayId: 'set-finnhub-key-task',
        packageId: 'verge',
        actionId: 'set-finnhub-key',
        severity: 'important',
        reason: 'Set your Finnhub API key to enable stock price tracking (optional). Get a free key at finnhub.io',
      })
    },
    down: IMPOSSIBLE,
  },
})
