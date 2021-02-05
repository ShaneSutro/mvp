const url = 'http://localhost:3000/students';

module.exports = {
  getAll: () => {
    return fetch(url + '/all')
  },

  create: (student) => {
    console.log(student)
    console.log('student:', student)
    return fetch(url + '/create',{
      method: 'POST',
      body: JSON.stringify(student),
      headers: {'Content-Type': 'application/json'}
    });
  },
};
