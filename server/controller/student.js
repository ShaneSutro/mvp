const mongoose = require('mongoose');
const Student = require('../model/Student')

module.exports = {
  create: (options) => {
    return new Promise((resolve, reject) => {
      Student.create(options)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}