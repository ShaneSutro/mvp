const db = require('./db.js')
const mongoose = require('mongoose');
const schema = require('./schema');
const Assessment = mongoose.model('Assessment', schema.lettersSchema);

module.exports = {
  readAll: () => {
    return new Promise((resolve, reject) => {
      Assessment.find((err, assessments) => {
        if (err) {
          reject(err)
        } else {
          resolve(assessments)
        }
      })
    })
  },

  saveAssessment: (student) => {
    return new Promise((resolve, reject) => {
      Assessment.findOneAndUpdate({ _id: student._id }, { letters: student.letters }, { new: true }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }
}