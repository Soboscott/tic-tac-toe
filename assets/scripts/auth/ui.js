'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  }
};

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }

  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#begin').show();
  $('#game-search').show();
  $('#search-result').show();
};

const failure = (error) => {
  console.error(error);
};

const signInFailure = (error) => {
  console.error(error);
  $('#enter-password').val('please try again.');
};

module.exports = {
  failure,
  success,
  signInFailure,
  signInSuccess,
};
