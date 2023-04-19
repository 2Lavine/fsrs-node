const apply_fuzz = require("../fuzz/applyFuzz.js");
const {
  intervalModifier,
  maximumInterval,
} = require("../share/getBasicParams.js");
function next_interval(stability,fuzz_factor) {
  const new_interval = apply_fuzz(stability * intervalModifier,fuzz_factor);
  return Math.min(Math.max(Math.round(new_interval), 1), maximumInterval);
}
module.exports = next_interval;
