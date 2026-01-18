const { scanProtocol } = require("./protocolScanner");
const { generateReport } = require("./report");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("DeFi Liquidity Risk Monitor");
console.log("===========================");

rl.question("Enter protocol name: ", async (protocol) => {
  try {
    const result = await scanProtocol(protocol);
    generateReport(protocol, result);
    console.log("Protocol scan completed.");
  } catch (error) {
    console.error("Scan error:", error.message);
  }
  rl.close();
});
