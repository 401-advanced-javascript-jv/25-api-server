'use strict';

/**
 * function to get one record by id from a specified collection
 * @param {*} request Express HTTP request
 * @param {*} response Express HTTP response
 * @param {*} next Express middleware next
 */
module.exports = (request, response, next) => {
  request.model
    .get(request.params.id)
    .then((result) => response.status(200).json(result[0]))
    .catch(next);
};
