const express = require('express');
const router = express.Router();
const studentController = require('../controller/student');

router.post('/create', (req, res) => {
  studentController
    .create(req.body)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => res.sendStatus(500));
});

router.post('/update', (req, res) => {
  //TODO: finish me
  console.log(req.body);
  res.end();
});

router.get('/all', (req, res) => {
  studentController
    .readAll()
    .then((students) => {
      res.end(students.toString());
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
