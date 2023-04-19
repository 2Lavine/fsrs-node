const seedrandom = require("seedrandom");

function get_seed(card) {
  if (
    // todo: move to customData behavior
    !card.again.seed |
    !card.hard.seed |
    !card.good.seed |
    !card.easy.seed
  ) {
    return "helloWorld";
    // if (typeof ctx !== "undefined" && ctx.seed) {
    //   return ctx.seed;
    // } else {
    //   return document.getElementById("qa").innerText;
    // }
  } else {
    return card.good.seed;
  }
}
function get_fuzz_factor(card) {
  // Note: Originally copied from seedrandom.js package (https://github.com/davidbau/seedrandom)
  let seed = get_seed(card);
  const generator = seedrandom(seed);
  const fuzz_factor = generator();
  seed = Math.round(fuzz_factor * 10000);
  card.again.seed = (seed + 1) % 10000;
  card.hard.seed = (seed + 2) % 10000;
  card.good.seed = (seed + 3) % 10000;
  card.easy.seed = (seed + 4) % 10000;
  return fuzz_factor;
}

module.exports = get_fuzz_factor;
