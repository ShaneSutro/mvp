const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const Student = require('../database/model/Student.js')

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.get('/test', (req, res) => {
  Student.create('Bill', 'Stickers')
    .then(data => console.log(data))
    .catch(err => console.error('Error saving student: ', err));
})

app.listen(PORT, (err) => {
  console.log('Listening on port', PORT)
})
