import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'
export const manifest = setupManifest({
  id: 'verge',
  title: 'Verge',
  license: 'MIT',
  packageRepo: 'https://github.com/tbtproductions/verge-startos',
  upstreamRepo: 'https://github.com/tbtproductions/Verge',
  marketingUrl: 'https://verge-cch.pages.dev',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    'verge': {
      source: { dockerTag: 'ghcr.io/tbtproductions/verge:1.0.5' },
      arch: ['x86_64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
