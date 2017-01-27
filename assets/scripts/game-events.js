'use strict';
const game = require('./example');

// const assignBox = function () {
//   for (let i = 0; i < game.gameBoard.length; i++) {
//     let box = document.getElementsByClassName('box');
//     box = box.setAttribute('data-box', game.gameBoard[i]);
//     for (let j = 0; j < game.player.length; j++) {
//       box.setAttribute('data-box', game.player[j]);
//     }
//   }
// };
//
// const displaySymbol = function () {
//   if (this.getAttribute('data-box') === 'x') {
//     return 'x';
//   } else {
//     return 'o';
//   }
// };

const addHandlers = () => {
  $('#start').on('click', game.reset);
  // $(".box").on('click', assignBox);
  // $(".box").on('click', displaySymbol);
  $('#boxZero').on('click', game.yourMove);
  $('#boxOne').on('click', game.yourMove);
  $('#boxTwo').on('click', game.yourMove);
  $('#boxThree').on('click', game.yourMove);
  $('#boxFour').on('click', game.yourMove);
  $('#boxFive').on('click', game.yourMove);
  $('#boxSix').on('click', game.yourMove);
  $('#boxSeven').on('click', game.yourMove);
  $('#boxEight').on('click', game.yourMove);
};


module.exports = {
  addHandlers,
};
