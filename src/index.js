const SimpleClassifier = require('molir/molir');

module.exports = class Eduir
{
  constructor(intents, score)
  {
    this.score = score;
    this.intents = intents;
  }

  get simpleClassifier()
  {
    // Dirty hack to unfix spelling of utterance
    let intents = this.intents.map( (intent) => {
      intent.utterences = intent.utterances;
      delete intent.utterances;
      return intent;
    });

    return new SimpleClassifier(intents, this.score);
  }
};
