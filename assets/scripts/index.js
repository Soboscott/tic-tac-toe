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
  ]
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

// const winRow = function () {};
// const winColumn = function () {};
// const winDiag = function () {};
// const winnerIs = function (player) {
//   return winRow(player) || winColumn(player) || winDiag(player);
// };
// const winner = function() {
//   if (winnerIs('x')) {
//     return 'x';
//   } else if (winnerIs('o')) {
//     return 'o';
//   }
//   return null;
// };
const announceWinner = function () {
  let winner;
  for (let i = 0; i < this.player.length; i++) {
    if (winner === this.player[i]) {
      return "The winner is player " + this.player[i] + "!";
    }
  }
};

module.export = {
  gameBoard, announceWinner,
};
