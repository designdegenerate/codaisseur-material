const patients = require("./patients");
const age = process.argv[2];

const patientsOlderThan = patients.filter(patient => {
  return patient.age > age;
});

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);