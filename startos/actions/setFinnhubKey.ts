import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  finnhubKey: Value.text({
    name: i18n('Finnhub API Key'),
    description: i18n('Free API key from finnhub.io for fetching stock prices. Required for stocks only — Bitcoin and crypto work without it.'),
    required: false,
    default: null,
    placeholder: 'Enter your Finnhub API key',
    masked: true,
    minLength: null,
    maxLength: null,
    patterns: [],
    inputmode: 'text',
  }),
})

export const setFinnhubKey = sdk.Action.withInput(
  'set-finnhub-key',
  async ({ effects }) => ({
    name: i18n('Set Finnhub API Key'),
    description: i18n('Set your Finnhub API key to enable stock price tracking. Get a free key at finnhub.io'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  inputSpec,
  async ({ effects }) => {
    const current = await storeJson.read((s) => s.finnhubKey).once()
    return { finnhubKey: current ?? null }
  },
  async ({ effects, input }) => {
    await storeJson.merge(effects, { finnhubKey: input.finnhubKey ?? '' })
    return {
      version: '1',
      title: 'Finnhub Key Saved',
      message: input.finnhubKey
        ? 'Your Finnhub API key has been saved. Restart Verge for it to take effect.'
        : 'Finnhub key cleared. Stock prices will not be available.',
      result: null,
    }
  },
)
