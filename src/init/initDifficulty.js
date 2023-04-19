const { w,ratings } = require("../share/getBasicParams");
const constrain_difficulty = require("./constrainDifficulty");
function init_difficulty(rating_option) {
  return +constrain_difficulty(
    w[2] + w[3] * (ratings[rating_option] - 3)
  ).toFixed(2);
}
module.exports = init_difficulty;
