'use strict';
const game = require('./example');

const addHandlers = () => {
  $('#reset').on('click', game.reset);
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

module.exports = {
  addHandlers,
};
