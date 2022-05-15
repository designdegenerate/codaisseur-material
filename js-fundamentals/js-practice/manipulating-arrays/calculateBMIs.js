const patients = require("./patients");

const calculateBMI = (height, weight) => {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(patient => {

  const BMI = calculateBMI(patient.height, patient.weight);
  return BMI;
});

console.log(bmis);