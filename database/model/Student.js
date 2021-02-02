const db = require('../db.js')
const mongoose = require('mongoose');
const schema = require('../schema');
const Student = mongoose.model('Student', schema.Student);

module.exports = {
  create: (firstName, lastName) => {
    return new Promise((resolve, reject) => {
      const student = new Student();
      student.firstName = firstName;
      student.lastName = lastName;
      student.save((err, data) => {
        if (err) {
          reject(error);
        } else {
          resolve(data);
        }
      })
    })
  }
}