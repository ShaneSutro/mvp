const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/students', require('./routers/students.js'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.listen(PORT, (err) => {
  console.log('Listening on port', PORT)
})
