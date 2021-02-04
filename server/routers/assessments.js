const express = require('express');
const router = express.Router();
const assessmentController = require('../controller/assessment')

router.get('/all', (req, res) => {
  assessmentController.readAll()
    .then(assessments => res.send(assessments))
    .catch(err => res.sendStatus(400));
})

module.exports = router;