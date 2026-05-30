import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { setFinnhubKey } from '../actions/setFinnhubKey'

export const current = VersionInfo.of({
  version: '2.0.0:8',
  releaseNotes: {
    en_US: 'Initial release of Verge for StartOS.',
    es_ES: 'Lanzamiento inicial de Verge para StartOS.',
    de_DE: 'Erstveroeffentlichung von Verge fuer StartOS.',
    pl_PL: 'Pierwsze wydanie Verge dla StartOS.',
    fr_FR: 'Version initiale de Verge pour StartOS.',
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
