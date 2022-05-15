/*
const names = ["David", "Rein", "Jeroen", "Swen"];

const greet = name => {
  console.log(`Hi ${name}`);
}

names.forEach(greet);


names.forEach(name => {
  console.log(`Oh hi ${name}`);
});
*/

const patients = require("./patients");

// declare function
const displayFullName = (patient) => {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  //console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(patient => {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  //console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight

patients.forEach(patient => {
  const { firstName, lastName, weight} = patient;
  //console.log(`${firstName } ${lastName } - ${weight}kg`);
});

// - for each patient, log their last name and gender

patients.forEach(patient => {
  const { lastName, gender} = patient;
  console.log(`${lastName } - ${gender}`);
});


// - for each patient,

//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName

patients.forEach(patient => {
  const { lastName, gender} = patient;
  console.log(gender === "m" ? `Mr. ${lastName}` : `Mrs. ${lastName}`);
});








