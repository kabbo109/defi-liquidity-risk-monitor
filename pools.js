async function fetchPools(protocol) {
  return [
    { name: "ETH/USDC", liquidity: 1200000, volatility: 0.12 },
    { name: "WBTC/ETH", liquidity: 850000, volatility: 0.18 },
    { name: "RISK/TOKEN", liquidity: 12000, volatility: 0.85 }
  ];
}

module.exports = { fetchPools };
