//Parse user input
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const userAge = parseInt(process.argv[4]);

//calculate BMI
const BMI = Math.round(weightInKg / (heightInM * heightInM));
const idealWeight = Math.round(22.5 * heightInM * heightInM);

//Calculate Calories 
const heightInCm = heightInM * 100;
const BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * userAge);
const caloriesToBurn = Math.round(BMR * 1.4);

//Calculate Weight Loss
const weightDifference = weightInKg - idealWeight;
const weeksToDiet = Math.round(weightDifference / 0.5);
const caloriesDiet = caloriesToBurn - 500;

console.log(`

**************
BMI CALCULATOR
**************

age: ${userAge} years
height: ${heightInM} m
weight: ${weightInKg} kg

****************
FACING THE FACTS
****************

Your BMI is ${BMI}

A BMI under 18.5 is considered underweight
A BMI over 25 is considered overweight

Your ideal weight is ${idealWeight} kg
With a normal lifestyle you need to burn ${caloriesToBurn} calories a day

*********
DIET PLAN
*********

If you want to reach your ideal weight of ${idealWeight} kg:

Eat ${caloriesDiet} calories a day
for ${weeksToDiet} weeks

`);