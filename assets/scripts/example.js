'use strict';


let game = {
  gameBoard: [
    '', '', '',
    '', '', '',
    '', '', '',
  ],
  player: 'x',

  setNextPlayer: function () {
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
    return this.player;
  },

  yourMove: function (playerSymbol) {
    for (let i = 0; i < this.gameBoard.length; i++) {
      if (this.player === playerSymbol && this.gameBoard[i] !== '') {
        this.gameBoard[i] = this.gameBoard[i];
      } else if (this.player === playerSymbol && this.gameBoard[i] === '') {
        this.gameBoard[i] = playerSymbol;
        game.setNextPlayer();
      }
    }

    return this.gameBoard;
  },

  threeInARow: function (player, cellOne, cellTwo, cellThree) {
    if ((cellOne === player) && (cellTwo === player) && (cellThree === player)) {

      return true;
    }
  },

  winRow: function (player) {
    if (this.threeInARow(player, this.gameBoard[0], this.gameBoard[1], this.gameBoard[2]) ||
    this.threeInARow(player, this.gameBoard[3], this.gameBoard[4], this.gameBoard[5]) ||
    this.threeInARow(player, this.gameBoard[6], this.gameBoard[7], this.gameBoard[8])) {

      return true;
    } else {

      return false;
    }
  },

  winColumn: function (player) {
    if (this.threeInARow(player, this.gameBoard[0], this.gameBoard[3], this.gameBoard[6]) ||
    this.threeInARow(player, this.gameBoard[1], this.gameBoard[4], this.gameBoard[7]) ||
    this.threeInARow(player, this.gameBoard[2], this.gameBoard[5], this.gameBoard[8])) {

      return true;
    } else {

      return false;
    }
  },

  winDiag: function (player) {
    if (this.threeInARow(player, this.gameBoard[0], this.gameBoard[4], this.gameBoard[8]) ||
    this.threeInARow(player, this.gameBoard[2], this.gameBoard[4], this.gameBoard[6])) {

      return true;
    } else {

      return false;
    }
  },

  winnerIs: function (player, opponent) {
    let winner = '';
    if (this.winRow(player) === true || this.winColumn(player) === true || this.winDiag(player) === true) {
      winner = player;
    } else if (this.winRow(opponent) === true || this.winColumn(opponent) === true || this.winDiag(opponent) === true) {
      winner = opponent;
    }

    return winner;
  },

  reset: function () {
    this.gameBoard = [
      '', '', '',
      '', '', '',
      '', '', '',
    ];
    return this.gameBoard;
  },
};

module.exports = {
  game,
};
//
// module.exports = true;
