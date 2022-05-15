const patients = require("./patients");
const height = process.argv[2];
let specificPatients = patients.filter(patient => patient.height > height);

console.log(specificPatients);
console.log(`Total patients: ${patients.length}`);
console.log(`Patients taller than ${height}cm: ${specificPatients.length}`);