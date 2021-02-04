const express = require('express');
const router = express.Router();
const studentController = require('../controller/student');

router.post('/create', (req, res) => {
  studentController.create(req.body)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => res.sendStatus(400));
});

router.post('/update', (req, res) => {
  studentController.update(req.body.conditions, req.body.update)
    .then((conf) => {
      console.log('Update:', conf)
      res.sendStatus(200)
    })
    .catch((err) => res.sendStatus(400))
});

router.get('/all', (req, res) => {
  studentController
    .readAll()
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

module.exports = router;
