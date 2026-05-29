export const DEFAULT_LANG = "en_US"
const dict = {
  // main.ts
  "Starting Hello World!": 0,
  "Starting Verge!": 6,
  "Web Interface": 1,
  "The web interface is ready": 2,
  "The web interface is not ready": 3,
  // interfaces.ts
  "Web UI": 4,
  "The web interface of Hello World": 5,
  "Finnhub API Key": 7,
  "Free API key from finnhub.io for fetching stock prices. Required for stocks only — Bitcoin and crypto work without it.": 8,
  "Set Finnhub API Key": 9,
  "Set your Finnhub API key to enable stock price tracking. Get a free key at finnhub.io": 10,
} as const
/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
