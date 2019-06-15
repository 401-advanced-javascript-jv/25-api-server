'use strict';

const QClient = require('@nmq/q/client');

module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found' };
  QClient.publish('database', 'error', { error });
  res.status(404).json(error);
};
