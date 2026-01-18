function log(message) {
  console.log("[LOG]", message);
}

function warn(message) {
  console.warn("[WARN]", message);
}

module.exports = { log, warn };
