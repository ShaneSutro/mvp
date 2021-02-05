const mongoose = require('mongoose');
const Assessment = require('../model/Assessment')

module.exports = {
  readAll: () => {
    return new Promise((resolve, reject) => {
      Assessment.readAll()
        .then(assessments => resolve(assessments))
        .catch(err => reject(err))
    })
  },

  saveAssessment: (student) => {
    return new Promise((resolve, reject) => {
      Assessment.saveAssessment(student)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  }
}