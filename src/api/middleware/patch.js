'use strict';

/**
 * function to update a single record by id from a specified collection
 * @param {*} request Express HTTP request
 * @param {*} response Express HTTP response
 * @param {*} next Express middleware next
 */

module.exports = (request, response, next) => {
  request.model
    .patch(request.params.id, request.body)
    .then((result) => response.status(200).json(result))
    .catch(next);
};
