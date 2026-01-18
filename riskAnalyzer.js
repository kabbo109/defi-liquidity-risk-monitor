function analyzeRisk(pools) {
  const high = [];
  const medium = [];
  const low = [];

  pools.forEach(pool => {
    if (pool.volatility > 0.6 || pool.liquidity < 50000) {
      high.push(pool);
    } else if (pool.volatility > 0.2) {
      medium.push(pool);
    } else {
      low.push(pool);
    }
  });

  return { high, medium, low };
}

module.exports = { analyzeRisk };
