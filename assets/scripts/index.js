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

let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', '',
];

const player = [
  'x',
  'o',
];

const yourMove = function () {
  for (let i = 0; i < player.length; i++) {
    for (let j=0; j < gameBoard.length; j++) {
      if (player[i] && gameBoard[j] === '') {
        gameBoard[j] = player[i];
      } else if (player[i] && gameBoard[j] !== '') {
        gameBoard[j] = gameBoard[j];
      }
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

const winnerIs = function(player) {
  let winner = '';
  if (winRow || winColumn || winDiag) {
    winner = player;
  }
};

module.exports = {
  yourMove,
  winnerIs,
};
