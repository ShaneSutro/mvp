module.exports = {
  get: () => {
    fetch('http://localhost:3000/test')
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }
}