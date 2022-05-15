const patients = require('./patients');

const calculateBMR = (weight, height, ageOfUser, genderOfUser) => {
  const heightInCm = height * 100;

  let BMR;

  if (genderOfUser === "m") {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  return BMR;
}

const patientBMRs = patients.map( patient => {
  const patientBMR = calculateBMR(
    patient.weight,
    patient.height,
    patient.age,
    patient.gender
  );
  return patientBMR;

})

console.log(patientBMRs);