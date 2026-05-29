# Verge — Net Worth Tracker

Verge is a self-hosted net worth tracker with live Bitcoin, crypto, and stock prices.

## Getting Started

1. Open the Web UI from the Dashboard
2. Add your assets (Bitcoin, savings, stocks, etc.)
3. Set your financial goal
4. Hit Refresh Prices to pull in live data

## Stock Prices (Optional)

Verge uses Finnhub to fetch stock prices. To enable stocks:

1. Go to **finnhub.io** and sign up for a free account
2. Copy your API key
3. Go to **Actions** on this service page
4. Click **Set Finnhub API Key**
5. Paste your key and save
6. Restart the service

Bitcoin and crypto prices work without any API key.

## Data

Your data is stored on your Start9 node at `/data/verge-data.json` and is included in backups.
