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
  $('#reset').on('click', game.reset);
  // $(".box").on('click', displaySymbol);
  $('#0').on('click', game.yourMove);
  $('#1').on('click', game.yourMove);
  $('#2').on('click', game.yourMove);
  $('#3').on('click', game.yourMove);
  $('#4').on('click', game.yourMove);
  $('#5').on('click', game.yourMove);
  $('#6').on('click', game.yourMove);
  $('#7').on('click', game.yourMove);
  $('#8').on('click', game.yourMove);
};

const takeOutHandlers = () => {
  $('#0').off('click', game.yourMove);
  $('#1').off('click', game.yourMove);
  $('#2').off('click', game.yourMove);
  $('#3').off('click', game.yourMove);
  $('#4').off('click', game.yourMove);
  $('#5').off('click', game.yourMove);
  $('#6').off('click', game.yourMove);
  $('#7').off('click', game.yourMove);
  $('#8').off('click', game.yourMove);
};

const act = function () {
  if (game.gameOver === true) {
    takeOutHandlers();
  }
};


module.exports = {
  addHandlers,
  takeOutHandlers,
  act,
};
