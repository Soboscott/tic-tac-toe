'use strict';

let gameBoard = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

let player = {
  symbol: 'x',

  setNextPlayer: function () {
    if (this.symbol === 'x') {
      this.symbol = 'o';
    } else {
      this.symbol = 'x';
    }
    return this.symbol;
  },
};

const yourMove = function (playerSymbol) {
  console.log(player.symbol);
  for (let i = 0; i < gameBoard.length; i++) {
    if (player.symbol === playerSymbol && gameBoard[i] !== '') {
      gameBoard[i] = gameBoard[i];
    } else if (player.symbol === playerSymbol && gameBoard[i] === '') {
      gameBoard[i] = playerSymbol;
      player.setNextPlayer();
    }
  }

  return gameBoard;
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  if ((cellOne === player) && (cellTwo === player) && (cellThree === player)) {

    return true;
  }
};

const winRow = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[1], gameBoard[2]) ||
  threeInARow(player, gameBoard[3], gameBoard[4], gameBoard[5]) ||
  threeInARow(player, gameBoard[6], gameBoard[7], gameBoard[8])) {

    return true;
  } else {

    return false;
  }
};

const winColumn = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
  threeInARow(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
  threeInARow(player, gameBoard[2], gameBoard[5], gameBoard[8])) {

    return true;
  } else {

    return false;
  }
};

const winDiag = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
  threeInARow(player, gameBoard[2], gameBoard[4], gameBoard[6])) {

    return true;
  } else {

    return false;
  }
};

const winnerIs = function (player, opponent) {
  let winner = '';
  if (winRow(player) === true || winColumn(player) === true || winDiag(player) === true) {
    winner = player;

    return "Congratulations! " + winner + " is the winner!";
  } else if (winRow(opponent) === true || winColumn(opponent) === true || winDiag(opponent) === true) {
    winner = opponent;

    return "Congratulations! " + winner + " is the winner!";
  } else {

    return "Tie game!";
  }
};

const reset = function () {
  gameBoard = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  return gameBoard;
};

const fullBoard = function (element) {
  return element === '';
};

const printBoard = function() {
  for (let i = 0; i < gameBoard.length; i+=3) {
    console.log(gameBoard[i] + " " + gameBoard[i + 1] + " " + gameBoard[i + 2]);
  }
};

const playGame = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    yourMove(player.symbol);
    if (gameBoard.every(fullBoard) === false) {
      winnerIs('x', 'o');
      }
    }
    printBoard();
    reset();
    return gameBoard;
  };

module.exports = {
  gameBoard,
  player,
  yourMove,
  threeInARow,
  winRow,
  winColumn,
  winDiag,
  winnerIs,
  reset,
  fullBoard,
  playGame,
  printBoard,
};
