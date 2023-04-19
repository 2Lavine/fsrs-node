const { ratings, w } = require("../share/getBasicParams");
function init_stability(rating_option) {
  return +Math.max(w[0] + w[1] * (ratings[rating_option] - 1), 0.1).toFixed(2);
}
module.exports = init_stability;
