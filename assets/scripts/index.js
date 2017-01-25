'use strict';

// const setAPIOrigin = require('../../lib/set-api-origin');
// const config = require('./config');
//
// $(() => {
//   setAPIOrigin(location, config);
// });
//
// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example');
//
// // use require without a reference to ensure a file is bundled
// require('./example');

const gameBoard = {
    cell0: null,
    cell1: null,
    cell2: null,
    cell3: null,
    cell4: null,
    cell5: null,
    cell6: null,
    cell7: null,
    cell8: null,
  };

const player = {
    playerX: "x",
    playerY: "y",
};

  const setNextPlayer = function () {
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }

    return this.player;
  },
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  if ((cellOne === player) && (cellTwo === player) && (cellThree === player)) {

    return true;
  }
};

const winRow = function (player) {
  if (threeInARow(player, gameBoard.board[0], gameBoard.board[1], gameBoard.board[2]) ||
  threeInARow(player, gameBoard.board[3], gameBoard.board[4], gameBoard.board[5]) ||
  threeInARow(player, gameBoard.board[6], gameBoard.board[7], gameBoard.board[8])) {

    return true;
  }

};

const winColumn = function (player) {
  if (threeInARow(player, gameBoard.board[0], gameBoard.board[3], gameBoard.board[6]) ||
  threeInARow(player, gameBoard.board[1], gameBoard.board[4], gameBoard.board[7]) ||
  threeInARow(player, gameBoard.board[2], gameBoard.board[5], gameBoard.board[8])) {

    return true;
  }

};

const winDiag = function (player) {
  if (threeInARow(player, gameBoard.board[0], gameBoard.board[4], gameBoard.board[8]) ||
  threeInARow(player, gameBoard.board[2], gameBoard.board[4], gameBoard.board[6])) {

    return true;
  }
};

const winnerIs = function (player) {
  let winner = '';
  if (winRow(player) || winColumn(player) || winDiag(player)) {
    winner = player;
  }
};

const announceWinner = function () {
  for (let i = 0; i < this.player.length; i++) {
    let winner = '';
    if (winnerIs(this.player[i]) === true) {
      winner = this.player[i];
    }

    // if (winner === this.player[i]) {
    return 'The winner is player ' + this.player[i] + '!';
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

module.exports = {
  gameBoard, announceWinner,
};
