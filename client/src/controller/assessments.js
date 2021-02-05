const url = 'http://localhost:3000/assessments';

module.exports = {
  getAll: () => {
    return fetch(url + '/all')
  },

  saveAssessment: (student) => {
    return fetch(url + '/saveAssessment', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: { 'Content-Type': 'application/json'}
    })
  }
};