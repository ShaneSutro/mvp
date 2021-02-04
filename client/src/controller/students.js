const url = 'http://localhost:3000/students';

module.exports = {
  getAll: () => {
    return fetch(url + '/all')
  },

  create: (student) => {
    return fetch({
      method: 'POST',
      url: url + '/create',
      data: student.toString(),
    });
  },
};
