const { fetchPools } = require("./pools");
const { analyzeRisk } = require("./riskAnalyzer");

async function scanProtocol(protocol) {
  const pools = await fetchPools(protocol);
  const risk = analyzeRisk(pools);

  return {
    protocol,
    poolCount: pools.length,
    highRiskPools: risk.high.length,
    mediumRiskPools: risk.medium.length,
    lowRiskPools: risk.low.length,
    riskLevel: risk.high.length > 1 ? "High" : "Medium"
  };
}

module.exports = { scanProtocol };
