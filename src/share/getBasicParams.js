const {
  ratings,
  deckParams,
  enable_fuzz,
  skip_decks,
  selectedDeck,
} = require("./ShareData");

function getBasicParamsByDeckName(deckName) {
  const params = deckParams.find((deck) => deck.deckName === deckName);
  const { w, requestRetention, maximumInterval, easyBonus, hardInterval } =
    params;
  const intervalModifier = Math.log(requestRetention) / Math.log(0.9);
  return {
    intervalModifier,
    w,
    requestRetention,
    maximumInterval,
    easyBonus,
    hardInterval,
    ratings,
    enable_fuzz,
    skip_decks,
  };
}
module.exports = getBasicParamsByDeckName(selectedDeck);
