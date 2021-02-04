const mongoose = require('mongoose');
const Assessment = require('../model/Assessment')

module.exports = {
  readAll: () => {
    return new Promise((resolve, reject) => {
      Assessment.readAll()
        .then(assessments => resolve(assessments))
        .catch(err => reject(err))
    })
  }
}