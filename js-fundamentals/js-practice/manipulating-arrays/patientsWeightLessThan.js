// patientsWeighingLessThan.js
const patients = require("./patients");
const weight = process.argv[2];

const patientsWeighingLessThan = patients.filter(patient => patient.weight < weight);

console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);