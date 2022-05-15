const patients = require('./patients');

const phoneNumList = patients.map( patient => {
  const {phoneNumber} = patient;
  return phoneNumber;
  }
)

console.log(phoneNumList);