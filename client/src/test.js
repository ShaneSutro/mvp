module.exports = {
  get: () => {
    fetch('http://localhost:3000/test', (err, data) => {
      console.log(err, data);
    })
  }
}