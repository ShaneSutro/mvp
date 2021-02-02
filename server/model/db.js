const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/assessments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(() => console.log('Connected!'))
  .catch(err => console.error(err));
