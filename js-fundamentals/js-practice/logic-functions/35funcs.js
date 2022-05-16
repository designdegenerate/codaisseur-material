//Function 0

const double1 = (num) => num * 2;

// console.log(double1(22));

//Function 1

const double2 = (num1, num2) => num1 * 2;

// console.log(double2(10, 2));

//Function 2

const double3 = (num1, num2) => (num1 > num2 ? num1 * 2 : num2 * 2);

//Long version

const double3b = (num1, num2) => {
  if (num1 > num2) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
};

// console.log(double2(1, 3));
// console.log(double3b(1, 3));

//Function 3

// Write a function with a string argument and
// a number argument that repeates the string
// from the first argument but repeated the
// amount of times equal to the second argument.

const repeat = (string, num) => {
  for (i = 0; i < num; i++) {
    console.log(string);
  }
};

// repeat("hello", 5);

//Function 4

const batman = () => {
  repeat("na", 10);
  console.log('Batman!');
}

// batman();

//Function 5
// Write a function with two number arguments. Have it return the largest number of the two.

const max = (num1, num2) => {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// console.log(max(5, 2));

//Function 6
//Write a function with two number arguments. Have it return the smallest number of the two divided by the largest numbero

const maxDivide = (num1, num2) => {

  const largestNum = num1 > num2 ? num1 : num2;

  const dividedNum1 = num1 / largestNum;
  const dividedNum2 = num2 / largestNum;

   if (dividedNum1 > dividedNum2) {
     return num1;
   } else {
     return num2;
   }

}

// console.log(maxDivide(10, 2));

//Function 7
//Write a function with two string arguments. Have it return the longest string.

const maxStr = (string1, string2) => {
  if (string1.length > string2.length) {
    return string1;
  } else {
    return string2;
  }
}

// console.log(maxStr('Hi', 'hello'));

//Function 8

const even = num => {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

// console.log(even(30));

//Function 9
//Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.

const evenBelow = totalNum => {

  //First round the number down
  totalNum = Math.floor(totalNum);

  //Create an array containing every whole number that counts down. Add 1 because JS numbers start at 0
  const numCountingDown = Array.from( { length: totalNum + 1}, (x, i) => i);

  //Filter the array to only contain numbers that can be cleanly divided by 2
  let evenNumberArray = numCountingDown.filter(num => num % 2 === 0);

  //Remove the number 0 from the array.
  evenNumberArray.shift()

  return evenNumberArray;

}

// console.log(evenBelow(20));

//Function 10
//Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.
const evenIn = numArray => {
  numArray = numArray.filter(num => num % 2 === 0);

  return numArray;
}

// console.log(evenIn([1,2,3,4,5,6,7,8,9,10]));

//Function 11
//Write a function with a single array of numbers argument. Return the result of multiplying all the numbers.
const multiplyArray = numArray => {

  //set the base number to be 1.
  //The first time the for loop runs
  //the first number will be multiplied by itself
  //But afterwards, it will be assigned the first
  //number in the array, after which it will continue normally.
  let multipliedNum = 1;

  //use a for loop, which starts after the first item
  //in the array, which gets multipled with the number.
  for (let i = 0; i < numArray.length; i++) {
    multipliedNum = multipliedNum * numArray[i];
  }

  return multipliedNum;
}

//console.log(multiplyArray([2,3,4]));

/*
 * Function 12
 *
 * Write a function with a single array of numbers argument.
 * Return the result of dividing the number from left to right. 
 * So the first number gets divided by the second and the 
 * result of that gets * divided by the third (and so on..).
 */

const DivideArray = numArray => {

  //Set the initial value to the first item
  //in the array.
  let dividedNum = numArray[0];

  //start the division from the 2nd item
  for (let i = 1; i < numArray.length; i++) {
    dividedNum = dividedNum / numArray[i];
  }

  return dividedNum;
}

// console.log(DivideArray([100, 2, 2, 2, 2]));

/* 13: splitCombine
 *
 * Write a function with two string arguments.
 * Split both strings in halves and recombine
 * the halves. Return the longest results of
 * the two combinations (or the first one
 *  if both have the same length).
 */

const splitCombine = (string1, string2) => {

  //factory constructor
  //that takes strings and splits it.
  const _splitString = (string) => {

    //Get the string and split in half.
    //Round the number to deal with uneven splits
    int = Math.round(string.length / 2);

    const leftHalf = string.substring(0, int);
    const rightHalf = string.substring(int);

    return { leftHalf, rightHalf };

  }

    const string1Split = _splitString(string1);
    const string2Split = _splitString(string2);

    //combo 1 = word1left + word2right
    //combo 2 = word2left + word1right

    const combo1 = string1Split.leftHalf + string2Split.rightHalf;
    const combo2 = string2Split.leftHalf + string1Split.rightHalf;

    if (combo1.length === combo2.length || combo1.length > combo2.length) {
      return combo1;
    } else {
      return combo2;
    }
}

// console.log(splitCombine("1234567890 1234r.", "potatoe"));

//function 14
//Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties.

const getName = person => {
  return person.name;
}

// console.log(getName({name: "Bob"}));

//function 15
//Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties.

const getNames = personArray => {
  return Array.from(personArray, person => person.name);
}

// console.log(getNames([{"name": "Bob"}, {"name": "Bill"}]));

/* Function 16: combineName
 * Write a function with one [{firstname: string, lastname: string}]
 * (list of object) argument. Return an array with all the full names
 * (both the first and the last name as a single string with a space in between them).
 */

const combineName = person => {
  return person.firstname + " " + person.lastname;
}

// console.log(combineName({"firstname": "Bob", "lastname": "Ross"}));

/* 17: uniqueCountries
 * Write a function with one [{country: string}](list of object) argument.
 * Return an array with every unique country value in the input array.
 */

const uniqueCountries = countries => {

  //Create a new set with the objects represented as json strings.
  //then form an array from that set
  let cleanedCountryList = new Set(countries.map(country => JSON.stringify(country)));
  return Array.from(cleanedCountryList, country => JSON.parse(country));
}

//Dummy country data for testing
// const myCountries = [
//   { country: "Japan" },
//   { country: "Japan" }, 
//   { country: "Japan" }, 
//   { country: "Thailand" }, 
//   { country: "Japan" }, 
//   { country: "Netherlands" }
// ];

/* 18: countCountries
 * Write a function with one [{country: string}](list of object) argument.
 * Return an object with all the unique values as keys and the amount of occurences as value.
 */

const countCountries = countries => {

  let output = [];
  const cleanedCountriesList = uniqueCountries(countries);

  cleanedCountriesList.forEach( item => {
    const country = {
      "country": item.country,
      "totalAmmount": countries.filter( ({country}) => country === item.country).length
    }

    output.push(country);
  });

  return output;

}

// console.log(countCountries(myCountries));

//19: highestNumber
//Write a function with one [number] argument. Return the highest number.

const highestNumber = numArray => {

  //Compare 

  return Math.max(numArray.reduce((a,b) => {
    return Math.max(a, b);
    },
    -Infinity
  ));

}

// console.log(highestNumber(
//   [1,10, 23, 12345, 123, 9877, 123, 456]
// ))

//20: Average
// Write a function with one [number] argument. Return the average (mean)

const average = numArray => {
  let totalNum = 0;

  numArray.forEach( num => {
    totalNum = totalNum + num;
  })

  return totalNum / (numArray.length);
}

// console.log(average([1,2,3,4,5,6]));

// 21: mode

// Write a function with one [number] argument. Return the mode (most frequent value).

// create new arrays containing the duplicates.
// create array containing only the unique numbers
// See which array.lenght has the highest value.
// return the number of that array, just use array[0].

//Create an array containing all the unique numbers
// iterate trough the numbers to see if they match the unique numbers
// If it matches the unique numbers, up the counter somewhere
// counter is an array

const mode = numArray => {
  const duplicateNumbers = [];
  const duplicateNumbersRate = [];
  const uniqueNumbers = new Set(numArray);

  //create an array with object
  //"number", (original number) "rate" (how frequently it appears)

  uniqueNumbers.forEach( (uniqueNum, i) => {
    const item = {
      number: uniqueNum,
      rate: numArray.filter( num => num === uniqueNum ).length
    }

    //push that object into an array
    duplicateNumbers.push(item);
  });

  //Get the frequency of each number and store it in a new array
  //But, the array order will correspond to each other
  duplicateNumbers.forEach( (dupeNum, i) => {
    duplicateNumbersRate.push(dupeNum.rate);
  });

  //Find the largest number in duplicateNumbersRate[]
  modeNumRate = Math.max(...duplicateNumbersRate);

  //Then, match that number back to the rate property
  //of duplicateNumbers[{}]
  const modeObject = duplicateNumbers.find( originalNum => {
    return originalNum.rate === modeNumRate;
  })

  return modeObject.number;

}

// console.log( mode([1,2,2,2,3,4,4]) );

//22
//22: reverse
// Write a function with one string argument. Return the reversed string.

const reverse = string => {

  //Split into an array, reverse the array, and generate string from that.
  let stringArray = Array.from(string);
  stringArray.reverse();
  return stringArray.join('');

}

//console.log(reverse('hello world'));

//23
const palindrome = string => string === reverse(string);

//console.log(palindrome('racecar'));

//24

//25
//25: array_intersect
//Write a function that takes two [number] arguments and return an array that contains all numers that are in both arrays.

const arrayIntersect = (numArray1, numArray2) => {

  let uniqueArray = numArray1.filter( num1 => {
    num1 === numArray2.find( num2 => {
      num2 === num1;
    })
  })

  return uniqueArray;
  //iterate one array trough the other
}

const myNumArray1 = [1,2,4,6,1,6,1,6,8,3,5];
const myNumArray2 = [5,2,4,1,6,3,5,2,5,7];

console.log(arrayIntersect(myNumArray1, myNumArray2));



module.exports = { 
  double1,
  double2,
  double3,
  repeat,
  batman,
  max,
  maxDivide,
  maxStr,
  even,
  evenBelow,
  evenIn,
  multiplyArray,
  splitCombine,
  getName,
  getNames,
  combineName,
  uniqueCountries,
  countCountries,
  highestNumber,
  average,
  mode,
  reverse

};