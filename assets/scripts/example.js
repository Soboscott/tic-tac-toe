'use strict';

let gameBoard = [
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
  // event.target.id = 'reset';
  //reassigns gameBoard to a blank board
  // event.target.id;
  gameBoard = [
      '-', '-', '-',
      '-', '-', '-',
      '-', '-', '-',
    ];
  //reassigns fullBoard to default
  fullBoard = false;
  $(".banner").text("");
  $(".box").text("");
  gameOver = false;
  return gameBoard;
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  //determines if selected cells are all equal to the same player
  if ((cellOne === player) && (cellTwo === player) && (cellThree === player)) {

    return true;
  }
};

const winRow = function (player) {
  //sets conditions for winning a row
  if (threeInARow(player, gameBoard[0], gameBoard[1], gameBoard[2]) ||
  threeInARow(player, gameBoard[3], gameBoard[4], gameBoard[5]) ||
  threeInARow(player, gameBoard[6], gameBoard[7], gameBoard[8])) {

    $(".banner").text("Congratulations! Player '" + player + "' is the winner!");
    gameOver = true;
    return;
  } else {

    return false;
  }
};

const winColumn = function (player) {
  //sets conditions for winning a column
  if (threeInARow(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
  threeInARow(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
  threeInARow(player, gameBoard[2], gameBoard[5], gameBoard[8])) {

    $(".banner").text("Congratulations! Player '" + player + "' is the winner!");
    gameOver = true;
    return;
  } else {

    return false;
  }
};

const winDiag = function (player) {
  //sets conditions for winning diagonally
  if (threeInARow(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
  threeInARow(player, gameBoard[2], gameBoard[4], gameBoard[6])) {

    $(".banner").text("Congratulations! Player '" + player + "' is the winner!");
            gameOver = true;
        return;
  } else {

    return false;
  }
};

const tieGame = function () {
  //tests if the board is full AND if there's no winner
  if (fullBoard === true && winRow(player) === false && winColumn(player) === false && winDiag(player) === false) {
    $(".banner").text("Well played! Tie Game!");
    gameOver = true;
    return;
  } else {
    return false;
  }
};

const isSpotTaken = function (element) {
  //determines if a cell has already been used
  return element !== '-';
};

const isBoardFull = function () {
  //determines if all the cells have been used
  if (gameBoard.every(isSpotTaken)) {
    fullBoard = true;
  }
};

const winnerIs = function (player) {
  //determines who the winner is
  return winRow(player) || winColumn(player) || winDiag(player);
};
//

const getWinner = function () {
  //checks if the board is full so we can run tieGame
  isBoardFull();
  //sets rules for the tie game, winner
  if (tieGame()) {
    //reassigns gameOver as true
    // gameOver = true;
    return;
  } else if (winnerIs(player[0])) {
    // gameOver = true;
    return;
  } else if (winnerIs(player[1])) {
    // gameOver = true;
    return;
  }

  else if (winnerIs(player[0] === false && winnerIs(player[1] === false && tieGame() === false))){
    //if nobody has won or tied, keeps gameOver as false
    gameOver = false;
  }
};

//prints out the board in the console for visual reference
const printBoard = function() {
  for (let i = 0; i < gameBoard.length; i+=3) {
    console.log(gameBoard[i] + " " + gameBoard[i + 1] + " " + gameBoard[i + 2]);
  }
};

const yourMove = function (event) {
  let index = event.target.id;
  //for the length of the gameBoard, if gameBoard[index] is not an empty string,
  //spotTaken is reassigned as true
  //defines spotTaken
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[index] !== '-') {
      spotTaken = true;
    } else {
      spotTaken = false;
    }
  }

  //sets condition for what happens when the spotTaken is true
  //cannot move forward, must pick a different spot
  if (spotTaken === true && fullBoard === false) {
    $(".banner").text("Please pick somewhere else!");
    console.log('Please pick somewhere else!');
    //if spotTaken is false, the next person can move
  } else if (gameOver === true) {
    return;
  } else if (spotTaken === false) {
    $(".banner").text("");
    turn++;
    //every other turn is x or o
    if (turn%2 === 0) {
      gameBoard[index] = player[0];
    } else {
      gameBoard[index] = player[1];
    }
    //if the gameBoard[index] is the same as a player
    //change the text in index.html to incude the player name
    for (let i = 0; i < player.length; i++) {
      if (gameBoard[index] === player[i] && gameOver !== true) {
        this.innerText = player[i];
      }
    }
  }
  // else if (fullBoard === true) {
  //   console.log('tie game');
  // }
  printBoard();
  getWinner();
  // if (getWinner() === true) {
  //   printBoard();
  //   // reset();
    // return gameBoard;
  // }
};

module.exports = {
  yourMove,
  reset,
};
