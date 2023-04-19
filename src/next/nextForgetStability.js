const { w } = require("../share/getBasicParams");
function next_forget_stability(d, s, r) {
  return +(
    w[9] *
    Math.pow(d, w[10]) *
    Math.pow(s, w[11]) *
    Math.exp((1 - r) * w[12])
  ).toFixed(2);
}
module.exports = next_forget_stability;
