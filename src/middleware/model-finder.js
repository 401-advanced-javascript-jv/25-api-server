'use strict';

/**
 * Middleware which parses the request.params.model to remove the model name from the params and attach it to the request as property ".model"
 * @module /src/middleware/model-finder
 * @requires ../models/[all]/[all]-model.js
 */
module.exports = (req,res,next) => {
  let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
  req.model = require(`../models/${modelName}/${modelName}-model.js`);
  next();
};
