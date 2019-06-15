'use strict';

// Client to send log messages to message server
const QClient = require('@nmq/q/client');

module.exports = (err, req, res, next) => {
  console.log('__SERVER_ERROR__', err);
  let error = { error: err.message || err };
  QClient.publish('database', 'error', {error});
  res.status(500).json(error);
};
