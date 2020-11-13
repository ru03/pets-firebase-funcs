const functions = require('firebase-functions');

function logger(msg) {
  return functions.logger.info(msg, { structuredData: true });
}

module.exports = logger;