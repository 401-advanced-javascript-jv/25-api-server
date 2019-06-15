'use strict';

/**
 * Players Model for MongoDB
 * @module src/models/players/players-model
 * @requires ../mongo-model.js
 * @requires ./players-schema.js
 */
const Model = require('../mongo-model.js');
const schema = require('./players-schema.js');

class Players extends Model {}

module.exports = new Players(schema);

