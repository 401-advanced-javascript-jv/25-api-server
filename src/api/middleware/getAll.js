'use strict';

/**
 * @module getAll
 * function to get all records from a specified collection
 * @param {*} request Express HTTP request
 * @param {*} response Express HTTP response
 * @param {*} next Express middleware next
 */
module.exports = (request, response, next) => {
  request.model
    .get()
    .then((data) => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
};
