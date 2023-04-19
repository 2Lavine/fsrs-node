const { w } = require("../share/getBasicParams");
function meanReversion(init, current) {
  return w[5] * init + (1 - w[5]) * current;
}
module.exports = meanReversion;
