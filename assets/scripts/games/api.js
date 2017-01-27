'use strict';

const config = require('../config.js');

const store = require('../store.js');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games[?over=]',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function () {
  return $.ajax({
    url: `${config.apiOrigin}/games/${store.data.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    id,
  });
};

const update = function (id) {
  return $.ajax({
    url: `${config.apiOrigin}/games/${store.data.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    id,
  });
};

module.exports = {
  index,
  show,
  create,
  update,
};
