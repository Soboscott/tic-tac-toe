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
  player: "x",

  setNextPlayer: function() {
    if (this.player === "x") {
      this.player = "o";
    } else {
      this.player = "x";
    }
    return this.player;
  }
};

// const setBoard = function () {
//   for (let i = 0; i < this.player.length; i++) {
//         let square = newBoard[i];
//         newBoard = square(this.player[j]);
//       }
//     };
//   };
//   return newBoard;
// };

const winRow = function () {};
const winColumn = function () {};
const winDiag = function () {};
const winnerIs = function (player) {
  return winRow(player) || winColumn(player) || winDiag(player);
};

const announceWinner = function () {
  let winner;
  for (let i = 0; i < this.player.length; i++) {
    if (winnerIs(this.player[i]) === true) {
      winner = this.player[i];
    }
    // if (winner === this.player[i]) {
      return "The winner is player " + this.player[i] + "!";
    }
  };
};

module.export = {
  gameBoard, announceWinner,
};
