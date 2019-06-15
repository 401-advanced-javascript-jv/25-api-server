'use strict';

/**
 * Mongoose schema for Teams Model
 * @module src/models/teams/teams-schema
 * @requires mongoose
 * @requires mongoose-schema-jsonschema
 */
// const players = require('../players/players-schema.js'); // eslint-disable-line
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

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
