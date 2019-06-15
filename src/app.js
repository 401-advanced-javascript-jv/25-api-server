'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/500.js');
const notFound = require( './middleware/404.js' );
const apiRoutes = require('./api/v1.js');

// Client to send log messages to message server
const QClient = require('@nmq/q/client');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use((request, response, next) => {
  let method = request.method.toLowerCase();
  let url = request.url;
  QClient.publish('database', method, {method, url});
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/api/v1', apiRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
