const { w } = require("../share/getBasicParams");
function next_recall_stability(d, s, r) {
  return +(
    s *
    (1 +
      Math.exp(w[6]) *
        (11 - d) *
        Math.pow(s, w[7]) *
        (Math.exp((1 - r) * w[8]) - 1))
  ).toFixed(2);
}
module.exports = next_recall_stability;
