const express = require('express');
const router = express.Router();
const assessmentController = require('../controller/assessment')

router.get('/all', (req, res) => {
  assessmentController.readAll()
    .then(assessments => res.send(assessments))
    .catch(err => res.sendStatus(400));
})

router.post('/saveAssessment', (req, res) => {
  assessmentController.saveAssessment(req.body)
    .then(response => res.send(response))
    .catch(err => res.sendStatus(400))
})

module.exports = router;