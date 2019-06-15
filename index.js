'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
};
mongoose
  .connect(process.env.MONGODB_URI, mongooseOptions)
  .catch('Cannot connect to Mongo');

require('./src/app.js').start(process.env.PORT);
