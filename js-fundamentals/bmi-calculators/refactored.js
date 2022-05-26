function validateNumberOfInputs(){
    if (process.argv.length !== 7){
        console.log(`
You gave ${process.argv.length - 2} argument(s) to this program
    
Please provide 5 arguments (in order) for:
    
1. Weight (kg)
2. Height (m)
3. Age (years)
4. Whether you exercise daily (yes/no)
5. Gender (m/f)
    
Example:
$ node index.js 82 1.79 32 yes m
        `)
        process.exit();
    }
}

function validateNumberDataType(weight, height, age){
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        console.log(`
Please make sure that weight, height, and age are numbers:

weight (kg) example: 82 | your input: ${process.argv[2]}
height (m) example 1.79 | your input: ${process.argv[3]}
age (years) example 32  | your input: ${process.argv[4]}

Example:
$ node index.js 82 1.79 32 yes m

        `)
        process.exit();
    }
}

function validateAge(age){
    if (age < 20 ){
        console.log("This program is only designed for persons aged 20 or older");
        process.exit();
    }
}

function validateWeight(weight){
    if (weight < 30 || weight > 300) {
        console.log(`
Please enter a weight between 30 kg and 300 kg:

weight (kg): 82 | your input: ${process.argv[2]}
        
Example:
$ node index.js 82 1.79 32 yes m
        `)
    }
}

function validateExercise(dailyExercise){
    if (dailyExercise !== "yes" && dailyExercise !== "no") {
        console.log(`
Please answer whether you exercise or not with a "yes" or "no" response:
    
do you exercise or not? (yes/no) | your answer: ${process.argv[5]}
    
Example:
$ node index.js 82 1.79 32 yes m
        `);
        process.exit();
    }
}

function validateGender(gender){
    if (gender !== "m" && gender !== "f") {
        console.log(`
Please enter your gender as f/m. Your input: ${process.argv[6]}
        `);
        process.exit();
    }
}

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function calculateBMR(weight, height, age, gender) {
    let BMR;
    BMR = (10 * weight) + (6.25 * 100 * height) - (5 * age);

    //Adjust BMR based on gender, if provided
    if (gender === "m") {
        BMR = BMR + 50;
    } else if (gender === "f") {
        BMR = BMR - 150;
    };

    return BMR
}

function calculateIdealWeight(height) {
    return 22.5 * height * height;
}

function calculateDailyCalories(doesExercise, BMR){
    return doesExercise === "yes" ? BMR * 1.6 : BMR * 1.4;
}

function calculateWeightToLoseKg(weight, idealWeight) {
    return weight - idealWeight;
}

function calculateDietCalories(weight, idealWeight, calories){
    const weightDifference = weight - idealWeight;
    return weightDifference < 0 ? calories + 500 : calories - 500;
}

function calculateDietWeeks(weight, idealWeight){
    const dietWeeks = (weight - idealWeight) / 0.5;
    return Math.abs(dietWeeks);
}

function formatOutput(userObject) {
    return `
    **************
    BMI CALCULATOR
    **************

    age: ${userObject.age} years
    gender: ${userObject.gender}
    height: ${userObject.heightInM} m
    weight: ${userObject.weightInKg} kg
    do you exercise daily? ${userObject.dailyExercise}

    ****************
    FACING THE FACTS
    ****************

    Your BMI is ${userObject.BMI}

    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight

    Your ideal weight is ${userObject.idealWeight} kg
    With a normal lifestyle you burn ${userObject.dailyCalories} calories a day

    **********
    DIET PLAN
    **********

    If you want to reach your ideal weight of ${userObject.idealWeight} kg:

    Eat ${userObject.dietCalories} calories a day
    For ${userObject.dietWeeks} weeks
    `;
}

function bmiCalculator(){

    validateNumberOfInputs();

    //Get user input
    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const age = parseInt(process.argv[4]);
    const dailyExercise = process.argv[5]; 
    const gender = process.argv[6];

    validateNumberDataType(weightInKg, heightInM, age);
    validateAge(age);
    validateExercise(dailyExercise);
    validateGender(gender);

    const BMI = calculateBMI(weightInKg, heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, age, gender);
    const idealWeight = calculateIdealWeight(heightInM);
    const dailyCalories = calculateDailyCalories(dailyExercise, BMR);
    const weightToLoseKg = calculateWeightToLoseKg(weightInKg, idealWeight);
    const dietWeeks = calculateDietWeeks(weightInKg, idealWeight);
    const dietCalories = calculateDietCalories(weightInKg, idealWeight, dailyCalories)

    const user = {
        weightInKg: weightInKg,
        heightInM: heightInM,
        age: age,
        dailyExercise: dailyExercise,
        gender: gender,
        BMI: BMI,
        BMR: BMR,
        idealWeight: idealWeight,
        dailyCalories: dailyCalories,
        weightToLoseKg: weightToLoseKg,
        dietWeeks: dietWeeks,
        dietCalories: dietCalories
    };

    const output = formatOutput(user);
    console.log(output);
};

bmiCalculator();