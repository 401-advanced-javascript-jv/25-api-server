'use strict';

/**
 * Teams model for MongoDB
 * @module src/models/teams/teams-model
 * @requires ../mongo-model.js
 * @requires ./teams-schema.js
 */
const Model = require('../mongo-model.js');
const schema = require('./teams-schema.js');

class Teams extends Model {}

module.exports = new Teams(schema);

