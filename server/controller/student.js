const mongoose = require('mongoose');
const Student = require('../model/Student')

module.exports = {
  create: (options) => {
    return new Promise((resolve, reject) => {
      Student.create(options)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  },

  readAll: () => {
    return new Promise((resolve, reject) => {
      Student.readAll()
        .then(students => resolve(students))
        .catch(err => reject(err))
    });
  },

  update: (conditions, update) => {
    return new Promise((resolve, reject) => {
      Student.update(conditions, update)
        .then(conf => resolve(conf))
        .catch(err => reject(err))
    })
  }
}