const express = require('express');
const router = express.Router();
const studentController = require('../controller/student')

router.post('/create', (req, res) => {
  studentController.create(req.body)
    .then(response => {
    res.sendStatus(201)
    })
  .catch(err => res.sendStatus(500))
});

router.post('/update', (req, res) => {
  console.log(req.body)
})

module.exports = router;