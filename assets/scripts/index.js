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
  player: [
    "x",
    "o"
  ],
  setBoard: function () {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.player.length; j++) {
        let square = this.board[i];
        let assign = square.replaceWith(this.player[j]);

        return assign;
      }
    }
  }
};

module.export = {
  gameBoard,
};
