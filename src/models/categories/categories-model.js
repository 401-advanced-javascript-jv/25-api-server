'use strict';

/**
 * Categories model, uses mongo-model for backend.
 * @module src/models/categories/categories-model
 * @requires ../mongo-model.js
 */

const Model = require('../mongo-model.js');
const schema = require('./categories-schema.js');

class Categories extends Model {}

module.exports = new Categories(schema);
