# Eduir
Educated intent recogniser (Edu ir)

The first version of this package (v1.0.0) is simply a wrapper for [molir](https://www.npmjs.com/package/molir) that fixes some bugs and shortcomings.

The second version (v2.0.0) will be a standalone library based on an informed BDI (Beliefs, desire, intent) structuring

## Installation

NPM
```bash
    npm i --save eduir
```

Yarn
```bash
    yarn add eduir
```

## Usage

### Simple classifier (built on molir)
```js
const Eduir = require('eduir');
const classifier = new Eduir(intents, score).simpleClassifier;
classifier.classify('Test utterance')
  .then( (result) => {
    console.log(result);
  });
```
