'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 * @requires express
 * @requires src/middleware/model-finder.js
 */

const cwd = process.cwd();
const express = require('express');
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);
const router = express.Router();

const swagger = require('swagger-ui-express');
const swaggerDocs = require(`${cwd}/docs/api/v1/swagger.json`);

const handleGetAll = require('./middleware/getAll.js');
const handleGetOne = require('./middleware/getOne.js');
const handlePost = require('./middleware/post.js');
const handlePut = require('./middleware/put.js');
const handlePatch = require('./middleware/patch.js');
const handleDelete = require('./middleware/delete.js');

router.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

// Evaluate the model, dynamically
router.param('model', modelFinder);

// API Routes
router.get('/:model', handleGetAll);
router.post('/:model', handlePost);

router.get('/:model/:id', handleGetOne);
router.put('/:model/:id', handlePut);
router.patch('/:model/:id', handlePatch);
router.delete('/:model/:id', handleDelete);

module.exports = router;
