const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

module.exports.Student = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  grade: String,
  lettersKnown: Number
});

module.exports.Letters = new Schema({
  id: Number,
  letter: String
})

module.exports.StudentsLetters = new Schema({
  id: ObjectId,
  id_letters: Number,
  id_students: Number
})