// emailList.js
const patients = require("./patients");

// map executes the callback function for each element
const emailAdresses = patients.map(patient => {
  // return only the email addresses to the output array
  return patient.email;
});

console.log(emailAdresses);