const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.get('/test', (req, res) => {
  res.send('<h1>Server Running</h1>')
})

app.listen(PORT, (err) => {
  console.log('Listening on port', PORT)
})
