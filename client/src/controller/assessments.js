const url = 'http://localhost:3000/assessments';

module.exports = {
  getAll: () => {
    return fetch(url + '/all')
  }
};