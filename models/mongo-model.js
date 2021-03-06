'use strict';

/**
 * MongoDB Model. Provides CRUD functionality via get([_id]), post(record), put(_id, record), and delete(_id)
 * @module src/models/mongo-model
 */
class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
