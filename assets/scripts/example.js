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

let player = [
  'x',
  'o',
];

let spotTaken = false;

let gameOver = false;

let fullBoard = false;

let turn = 0;

const reset = function () {
  gameBoard = newGameBoard;
  fullBoard = false;
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

    console.log('Congratulations! ' + player + " is the winner!");
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

// const isBoardFull = function () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard.every(spotTaken === true)) {
//       fullBoard = true;
//     }
//   }
// };


const isSpotTaken = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] !== '-') {
      spotTaken = true;
    } else {
      spotTaken = false;
    }
  }
};

const isBoardFull = function () {
  if (gameBoard.every(isSpotTaken)) {
    fullBoard = true;
  }
};

const winnerIs = function (player) {
  return winRow(player) || winColumn(player) || winDiag(player);
};
//
const tieGame = function () {
  if (fullBoard === true && winRow(player) === false && winColumn(player) === false && winDiag(player) === false) {
    console.log("Well played! Tie game!");
    reset();
  } else {
    return false;
  }
};

const getWinner = function () {
  isBoardFull();
  if (tieGame()) {
    gameOver = true;
    return 'tie game';
  } else if (winnerIs(player[0])) {
    gameOver = true;
    return 'x';
  } else if (winnerIs(player[1])) {
    gameOver = true;
    return 'o';
  }

  else {
    gameOver = false;
  }
};

const printBoard = function() {
  for (let i = 0; i < gameBoard.length; i+=3) {
    console.log(gameBoard[i] + " " + gameBoard[i + 1] + " " + gameBoard[i + 2]);
  }
};

const yourMove = function (num) {
  console.log(player.symbol);
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[num] !== '-') {
      spotTaken = true;
    } else {
      spotTaken = false;
    }
  }

  if (spotTaken === true && fullBoard === false) {
    console.log('Please pick somewhere else!');
  } else {
    turn++;
    if (turn%2 === 0) {
      gameBoard[num] = player[0];
    } else {
      gameBoard[num] = player[1];
    }
  }
  printBoard();
  getWinner();
  if (getWinner() === true) {
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
