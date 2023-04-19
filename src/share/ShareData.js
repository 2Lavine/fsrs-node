const ratings = {
  again: 1,
  hard: 2,
  good: 3,
  easy: 4,
};
const deckParams = [
  {
    // Default parameters of FSRS4Anki for global
    deckName: "global config for FSRS4Anki",
    w: [1, 1, 5, -0.5, -0.5, 0.2, 1.4, -0.12, 0.8, 2, -0.2, 0.2, 1],
    // The above parameters can be optimized via FSRS4Anki optimizer.
    // For details about the parameters, please see: https://github.com/open-spaced-repetition/fsrs4anki/wiki/Free-Spaced-Repetition-Scheduler
    // User's custom parameters for global
    requestRetention: 0.9, // recommended setting: 0.8 ~ 0.9
    maximumInterval: 36500,
    easyBonus: 1.3,
    hardInterval: 1.2,
    // FSRS only modifies the long-term scheduling. So (re)learning steps in deck options work as usual.
    // I recommend setting steps shorter than 1 day.
  },
  {
    // Example 1: User's custom parameters for this deck and its sub-decks.
    // Need to add <div id=deck deck_name="{{Deck}}"></div> to your card's front template's first line.
    deckName: "ALL::Learning::English::Reading",
    w: [
      1.1475, 1.401, 5.1483, -1.4221, -1.2282, 0.035, 1.4668, -0.1286, 0.7539,
      1.9671, -0.2307, 0.32, 0.9451,
    ],
    requestRetention: 0.9,
    maximumInterval: 36500,
    easyBonus: 1.3,
    hardInterval: 1.2,
  },
  {
    // Example 2: User's custom parameters for this deck and its sub-decks.
    // Don't omit any keys.
    deckName: "ALL::Archive",
    w: [
      1.2879, 0.5135, 4.9532, -1.502, -1.0922, 0.0081, 1.3771, -0.0294, 0.6718,
      1.8335, -0.4066, 0.7291, 0.5517,
    ],
    requestRetention: 0.9,
    maximumInterval: 36500,
    easyBonus: 1.3,
    hardInterval: 1.2,
  },
];
const enable_fuzz = true;
const skip_decks = ["ALL::Learning::ML::NNDL", "ALL::Learning::English"];
const selectedDeck = "global config for FSRS4Anki";
module.exports = {
  ratings,
  deckParams,
  enable_fuzz,
  skip_decks,
  selectedDeck,
};
