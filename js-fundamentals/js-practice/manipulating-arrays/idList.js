const patients = require('./patients');

const id = patients.map( patient => {
  const {id} = patient;
  return id;
  }
)

console.log(id);