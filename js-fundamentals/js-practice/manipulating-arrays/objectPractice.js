const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height

firstPatient.weight = 40;
firstPatient.age = 24;
firstPatient.height = 128;

// 2. declare a variable fullName and assign the firstName, and lastName of the firstPatient to it

const fullName = firstPatient.firstName + " " + firstPatient.lastName;
console.log(fullName);

// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"

const doesExercises  = firstPatient.dailyExercise === "yes" ? "this patient exercises" : "this patiend does not exercise";

console.log(doesExercises);