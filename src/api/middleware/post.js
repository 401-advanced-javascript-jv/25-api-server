'use strict';

/**
 * function to add one record to a specified collection
 * @param {*} request Express HTTP request
 * @param {*} response Express HTTP response
 * @param {*} next Express middleware next
 */
module.exports = (request, response, next) => {
  request.model
    .post(request.body)
    .then((result) => response.status(200).json(result))
    .catch(next);
};
