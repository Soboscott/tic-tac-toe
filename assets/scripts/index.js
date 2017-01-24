'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const gameBoard = {
  board: [0, 1, 2,
          3, 4, 5,
          6, 7, 8],
  player: ["x", "o"]
};


module.export = {
  gameBoard,
};
