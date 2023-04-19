function constrain_difficulty(difficulty) {
  //Returns a value between 1 and 10 after rounding a number difficulty to two decimal places,
  return Math.min(Math.max(difficulty.toFixed(2), 1), 10);
}
module.exports = constrain_difficulty;
