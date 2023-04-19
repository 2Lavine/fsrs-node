const { easyBonus, hardInterval } = require("./src/share/getBasicParams");
const Card = require("./src/class/Card");
function dealCards(card) {
  if (card.is_new()) {
    card.initStates();
    const good_interval = card.getNextInterval(card.good.s);
    const easy_interval = Math.max(
      card.getNextInterval(card.easy.s * easyBonus),
      good_interval + 1
    );
    card.state = "review";
    card.elapsedDays = 1;
    return {
      good_interval,
      easy_interval,
    };
  } else if (card.is_learning()) {
    // Init states if the card didn't contain card.customData
    if (card.is_empty()) {
      this.initStates();
    }
    const good_interval = card.getNextInterval(card.good.s);
    const easy_interval = Math.max(
      card.getNextInterval(card.easy.s * easyBonus),
      good_interval + 1
    );
    return {
      good_interval,
      easy_interval,
    };
    // For review cards
  } else if (card.is_review()) {
    const interval = card.elapsedDays;
    // const interval = states.current.normal?.review.elapsedDays
    //   ? states.current.normal.review.elapsedDays
    //   : states.current.filtered.rescheduling.originalState.review.elapsedDays;

    const last_d = card.again.d;
    const last_s = card.again.s;
    const retrievability = Math.exp((Math.log(0.9) * interval) / last_s);
    card.setNext(last_d, last_s, retrievability);

    let hard_interval = card.getNextInterval(last_s * hardInterval);
    let good_interval = card.getNextInterval(card.good.s);
    let easy_interval = card.getNextInterval(card.easy.s * easyBonus);
    hard_interval = Math.min(hard_interval, good_interval);
    good_interval = Math.max(good_interval, hard_interval + 1);
    easy_interval = Math.max(easy_interval, good_interval + 1);
    return { hard_interval, good_interval, easy_interval };
  }
}
let card = new Card();
let data = dealCards(card);
console.log(data, card);
data = dealCards(card);
console.log(data);
data = dealCards(card);
console.log(data);
data = dealCards(card);
console.log(data);
