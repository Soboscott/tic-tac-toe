'use strict';

const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }
};

const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
};
