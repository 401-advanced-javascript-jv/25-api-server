'use strict';

/**
 * Mongoose schema for Teams Model
 * @module src/models/teams/teams-schema
 * @requires mongoose
 * @requires mongoose-schema-jsonschema
 */
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

// Need to require the schema for the virtual field we're populating, otherwise
// Mongoose throws a fit until the players get loaded into memory, which means
// the /players route needs to get hit
const players = require('../players/players-schema.js'); // eslint-disable-line

const teams = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne: false,
});

teams.pre('find', function() {
  try {
    this.populate('players');
  } catch (e) {
    console.error('Find Population Error', e);
  }
});

module.exports = mongoose.model('teams', teams);
