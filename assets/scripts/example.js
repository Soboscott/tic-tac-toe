'use strict';

let gameBoard = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

let player = 'x';

const setNextPlayer = function () {
  if (player === 'x') {
    player = 'o';
  } else {
    player = 'x';
  }
  return player;
};

const yourMove = function (playerSymbol) {
  setNextPlayer();
  for (let i = 0; i < gameBoard.length; i++) {
    if (player === playerSymbol && gameBoard[i] !== '') {
      gameBoard[i] = gameBoard[i];
    } else if (player === playerSymbol && gameBoard[i] === '') {
      gameBoard[i] = playerSymbol;
      setNextPlayer();
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
  } else if (winRow(opponent) === true || winColumn(opponent) === true || winDiag(opponent) === true) {
    winner = opponent;
  }

  return winner;
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

const playGame = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    yourMove();
    if (gameBoard.every(fullBoard) === false) {
      winnerIs('x', 'o');
      reset();
      }
    }
  };

module.exports = {
  gameBoard,
  player,
  setNextPlayer,
  yourMove,
  threeInARow,
  winRow,
  winColumn,
  winDiag,
  winnerIs,
  reset,
  fullBoard,
  playGame,
};
