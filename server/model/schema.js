const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

module.exports.studentsSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  grade: String,
  lettersKnown: Number
});

module.exports.lettersSchema = new Schema({
  id: Number,
  letter: String
})

module.exports.studentsLettersSchema = new Schema({
  id: ObjectId,
  id_letters: Number,
  id_students: Number
})