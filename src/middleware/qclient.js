'use strict';

/**
 * @module QClient Logger
 * Sends database events to the QClient logger
 */
const QClient = require('@nmq/q/client');

module.exports = (request, response, next) => {
  let method = request.method.toLowerCase();
  let url = request.url;
  QClient.publish('database', method, {method, url});
  next();
};
