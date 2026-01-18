const fs = require("fs");

function generateReport(protocol, result) {
  const report = {
    protocol,
    network: "Ethereum",
    generatedAt: new Date().toISOString(),
    analytics: result
  };

  fs.writeFileSync("protocol_report.json", JSON.stringify(report, null, 2));
  console.log("Report saved as protocol_report.json");
}

module.exports = { generateReport };
