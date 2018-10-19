const IntentClassifier = require('molir/molir');

module.exports = class Eduir
{
  constructor(intents, score)
  {
    this.score = score;
    // Dirty hack to unfix spelling of utterance
    this.intents = intents.map( (intent) => {
      intent.utterences = intent.utterances;
      delete intent.utterances;
      return intent;
    });
  }

  get classifier()
  {
    return new IntentClassifier(this.intents, this.score);
  }
};
