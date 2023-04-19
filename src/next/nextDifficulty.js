const { ratings, w } = require("../share/getBasicParams");
const constrain_difficulty = require("../init/constrainDifficulty");
const mean_reversion = require("./meanReversion");
function next_difficulty(d, rating_option) {
  let next_d = d + w[4] * (ratings[rating_option] - 3);
  return constrain_difficulty(mean_reversion(w[2], next_d));
}
module.exports = next_difficulty;
