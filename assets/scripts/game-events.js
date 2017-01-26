'use strict';
const game = require('./example');


const addHandlers = () => {
  $('#start').on('click', game.reset);
  $('#boxZero').on('click', game.yourMove(0));
  $('#boxOne').on('click', game.yourMove(1));
  $('#boxTwo').on('click', game.yourMove(2));
  $('#boxThree').on('click', game.yourMove(3));
  $('#boxFour').on('click', game.yourMove(4));
  $('#boxFive').on('click', game.yourMove(5));
  $('#boxSix').on('click', game.yourMove(6));
  $('#boxSeven').on('click', game.yourMove(7));
  $('#boxEight').on('click', game.yourMove(8));
};

module.exports = {
  addHandlers,
};
