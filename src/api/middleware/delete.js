'use strict';

/**
 * function to delete a single record by id from a specified collection
 * @param {*} request Express HTTP request
 * @param {*} response Express HTTP response
 * @param {*} next Express middleware next
 */
module.exports = (request, response, next) => {
  request.model
    .delete(request.params.id)
    .then((result) => response.status(200).json(result))
    .catch(next);
};
