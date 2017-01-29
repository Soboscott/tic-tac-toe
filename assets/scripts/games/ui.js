'use strict';

const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }
};

const onIndexSuccess = function (data) {
  if (data.games) {
    console.log(data.games);
    for (let i = 0; i < data.games.length; i++) {
      $('#search-result').text(data.games);
    }
  }
};

const onGetSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
    $('#search-result').text(data.game.cells);
  }
};

const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
  console.log(data.game);
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
