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

// let inPlay = true;

const reset = function () {
  gameBoard = newGameBoard;
  return gameBoard;
};

// const yourMove = function (playerSymbol) {
//   console.log(player.symbol);
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (player.symbol === playerSymbol && gameBoard[i] !== '') {
//       gameBoard[i] = gameBoard[i];
//     } else if (player.symbol === playerSymbol && gameBoard[i] === '') {
//       gameBoard[i] = playerSymbol;
//       player.setNextPlayer();
//     }
//   }
//
//   return gameBoard;
// };

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

    return null;
  }
};

const winColumn = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
  threeInARow(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
  threeInARow(player, gameBoard[2], gameBoard[5], gameBoard[8])) {

    console.log('Congratulations!' + player + " is the winner!");
    reset();
  } else {

    return null;
  }
};

const winDiag = function (player) {
  if (threeInARow(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
  threeInARow(player, gameBoard[2], gameBoard[4], gameBoard[6])) {

    console.log('Congratulations!' + player + " is the winner!");
    reset();
  } else {

    return null;
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
    // reset();
    // inPlay = false;
    return true;

  } else if (fullBoard()) {
    // inPlay = false;

    return "Tie game!";
  } else {
    return false;
  }
};

// const winnerIs = function (player, opponent) {
//   let winner = '';
//   if (winRow(player) || winColumn(player) || winDiag(player)) {
//     winner = player;
//     reset();
//
//   } else if (winRow(opponent) || winColumn(opponent) || winDiag(opponent)) {
//     winner = opponent;
//     reset();
//
//   } else if (fullBoard) {
//
//     return "Tie game!";
//
//   }
// };


const printBoard = function() {
  for (let i = 0; i < gameBoard.length; i+=3) {
    console.log(gameBoard[i] + " " + gameBoard[i + 1] + " " + gameBoard[i + 2]);
  }
};

const yourMove = function (playerSymbol) {
  // console.log(player.symbol);
  for (let i = 0; i < gameBoard.length; i++) {
    if (player.symbol === playerSymbol && gameBoard[i] !== '-') {
      gameBoard[i] = gameBoard[i];
    } else if (player.symbol === playerSymbol && gameBoard[i] === '-') {
      gameBoard[i] = playerSymbol;
      printBoard();
      winnerIs();
      player.setNextPlayer();
    }
  }
  // return gameBoard;
};

const playGame = function () {
  // if (inPlay === true) {
    for (let i = 0; i < gameBoard.length; i++) {
      yourMove(player.symbol);
      // if (inPlay === false) {
      //   return;
      // }
    }
  // } else {
  //   reset();
  // }
    // return gameBoard;
    // printBoard();
    // reset();
    // return gameBoard;
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
