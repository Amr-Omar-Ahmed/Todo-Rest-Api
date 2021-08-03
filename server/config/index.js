const env = process.env.NODE_ENV || "development";
let config;
if (env === "development") {
  config = require('../config/dev.js');
}
Object.keys(config).forEach(key => {
  process.env[key] = config[key];
});


