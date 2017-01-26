'use strict';

let gameBoard = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-',
  ];

let newGameBoard = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-',
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

let spotTaken = false;

let gameOver = false;

let turn = 0;

const reset = function () {
  gameBoard = newGameBoard;
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

    console.log('Congratulations!' + player + " is the winner!");
    reset();
  } else {

    return false;
  }
};

const winColumn = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
  threeInARow(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
  threeInARow(player, gameBoard[2], gameBoard[5], gameBoard[8])) {

    console.log('Congratulations!' + player + " is the winner!");
    reset();
  } else {

    return false;
  }
};

const winDiag = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
  threeInARow(player, gameBoard[2], gameBoard[4], gameBoard[6])) {

    console.log('Congratulations!' + player + " is the winner!");
    reset();
  } else {

    return false;
  }
};

const fullBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] !== '-') {
      return true;
    }
  }
  return gameBoard;
};

const winnerIs = function () {
  if (winRow(player.symbol) || winColumn(player.symbol) || winDiag(player.symbol)) {
    gameOver = true;
    return true;

  } else if (fullBoard()) {
    gameOver = true;

    return "Tie game!";
  } else {
    gameOver = false;

    return false;
  }
};

const printBoard = function() {
  for (let i = 0; i < gameBoard.length; i+=3) {
    console.log(gameBoard[i] + " " + gameBoard[i + 1] + " " + gameBoard[i + 2]);
  }
};

const yourMove = function (num) {
  // console.log(player.symbol);
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[num] !== '-') {
      spotTaken = true;
    } else {
      spotTaken = false;
    }
  }
  if (spotTaken === true) {
    console.log('Please pick somewhere else!');
  } else {
    turn++;
    if (turn%2 === 0) {
      gameBoard[num] = 'x';
    } else {
      gameBoard[num] = 'o';
    }
  }
  printBoard();
  winnerIs();
  if (winnerIs() === true) {
    reset();
    printBoard();
  }
};

// printBoard();
// reset();
// return gameBoard;

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
  printBoard,
};
