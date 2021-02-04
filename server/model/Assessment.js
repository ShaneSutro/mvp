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
  }
}