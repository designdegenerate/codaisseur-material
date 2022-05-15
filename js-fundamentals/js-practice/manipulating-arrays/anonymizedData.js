const patients = require("./patients");
console.log(patients);

// map executes a callback for each element in the array
const anonymizedData = patients.map(patient => {
  // return an object with id and age, it gets added to the output array
  return {
    id: patient.id,
    age: patient.age,
    dailyExercise: patient.dailyExercise,
    height: patient.height,
    gender: patient.gender
  };
});

console.log(anonymizedData);