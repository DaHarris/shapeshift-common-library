var config = require('config')

const getConfig = function (serviceName) {
  let serviceConfig = config.get(serviceName)
  return serviceConfig
}

module.exports = getConfig
