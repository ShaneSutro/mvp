const db = require('./db.js')
const mongoose = require('mongoose');
const schema = require('./schema');
const Student = mongoose.model('Student', schema.studentsSchema);

module.exports = {
  create: (options) => {
    return new Promise((resolve, reject) => {
      const student = new Student();
      student.firstName = options.firstName;
      student.lastName = options.lastName;
      student.grade = options.grade;
      student.lettersKnown = 0
      student.save((err, data) => {
        if (err) {
          reject(error);
        } else {
          resolve(data);
        }
      })
    })
  },

  readAll: () => {
    return new Promise((resolve, reject) => {
      Student.find((err, students) => {
        if (err) {
          reject(err);
        } else {
          resolve(students);
        }
      })
    })
  }
}