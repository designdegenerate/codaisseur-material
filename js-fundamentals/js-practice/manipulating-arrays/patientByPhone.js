//patient by phone
const patients = require('./patients');
const phone = process.argv[2];

const specificPatient = patients.find(
  patient => patient.phoneNumber === phone 
)

if (specificPatient === undefined) {
  console.log("The patient with this phone number could not be found")
} else {
  console.log(specificPatient);
}