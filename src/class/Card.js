const init_stability = require("../init/initStability");
const init_difficulty = require("../init/initDifficulty");
const next_difficulty = require("../next/nextDifficulty");
const next_forget_stability = require("../next/nextForgetStability");
const next_recall_stability = require("../next/nextRecallStability");
const next_interval = require("../next/nextInterval");
const get_fuzz_factor = require("../fuzz/getFuzzFactor");
class Card {
  constructor() {
    this.state = "new";
    this.again = { d: 0, s: 0 };
    this.hard = { d: 0, s: 0 };
    this.good = { d: 0, s: 0 };
    this.easy = { d: 0, s: 0 };
  }
  initStates() {
    this.initDifficulty();
    this.initStability();
  }
  initDifficulty() {
    this.again.d = init_difficulty("again");
    this.hard.d = init_difficulty("hard");
    this.good.d = init_difficulty("good");
    this.easy.d = init_difficulty("easy");
  }
  initStability() {
    this.again.s = init_stability("again");
    this.hard.s = init_stability("hard");
    this.good.s = init_stability("good");
    this.easy.s = init_stability("easy");
  }
  setNext(last_d, last_s, retrievability) {
    this.setNextDiffuculty(last_d);
    this.setNextStability(last_s, retrievability);
  }
  setNextDiffuculty(last_d) {
    this.again.d = next_difficulty(last_d, "again");
    this.hard.d = next_difficulty(last_d, "hard");
    this.good.d = next_difficulty(last_d, "good");
    this.easy.d = next_difficulty(last_d, "easy");
  }
  setNextStability(last_s,retrievability) {
    this.again.s = next_forget_stability(this.again.d, last_s, retrievability);
    this.hard.s = next_recall_stability(this.hard.d, last_s, retrievability);
    this.good.s = next_recall_stability(this.good.d, last_s, retrievability);
    this.easy.s = next_recall_stability(this.easy.d, last_s, retrievability);
  }
  is_new() {
    return this.state === "new";
  }
  is_learning() {
    return this.state === "learning";
  }
  is_review() {
    return this.state === "review";
  }
  is_empty() {
    return (
      !this.again.d |
      !this.again.s |
      !this.hard.d |
      !this.hard.s |
      !this.good.d |
      !this.good.s |
      !this.easy.d |
      !this.easy.s
    );
  }
  getNextInterval(stability) {
    return next_interval(stability, get_fuzz_factor(this));
  }
}
module.exports = Card;
