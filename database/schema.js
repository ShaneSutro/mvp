const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

module.exports.Student = new Schema({
  id: ObjectId,
  firstName: String,
  lastName: String,
})