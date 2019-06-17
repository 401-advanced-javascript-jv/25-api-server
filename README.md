# LAB - 25

## Message Queue - API Server

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-jv/25-api/pull/1)
* [travis](https://travis-ci.com/401-advanced-javascript-jv/25-api)
* [backend API server](https://lab25-api.herokuapp.com/)

### Documentation
- [Swagger API Docs](http://lab25-api.herokuapp.com/api/v1/docs/)
- [Server Documentation](http://lab25-api.herokuapp.com/docs/)

### Routes
- `/teams`, `/players`, `/categories`
  - `GET` - Get all items
  - `POST` - Post a new item
- `/teams/:id`, `/players/:id`, `/categories/:id`
  - `GET` - Get a specific item
  - `PUT` - Replacea a specific item
  - `PATCH` - Update a specific item
  - `DELETE` - Delete a specific item

### Setup
#### `.env` (environment variable) requirements
- `PORT` - port to run backend server on
- `MONGODB_URI` - MongoDB URI
- `Q_SERVER` - URL to the running Q Server - use for logging
  - Example: `Q_SERVER=http://localhost:3333`

#### Running the app
* `npm start`

