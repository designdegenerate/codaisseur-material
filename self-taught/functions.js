//Normal Function
function goGreendale() {
  console.log('Go Greendale');
}

//A For loop
const Things = [1, 2, 3, 4];

for (var i = Things.length - 1; i >= 0; i--) {
  Things[i]
}

//Object constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  }

//Attach a function to an object
//Using prototype, its a shared thing so
//that it won't be duplicated which
//takes up memory.

Person.prototype = Object.create(goGreendale.prototype);

//You can also create a new function while attaching it
//Person.prototype.sayHello = () => console.log('hello world');

//Factory constructor
//Takes input and outputs a selection
const Human = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  const sayStupid = () => console.log('stupid');
  const unusedThing = () => 1 + 1;
  return {sayName, sayStupid, unusedThing};
}

//Create a new function, taking its
const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName, sayStupid} = Human(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, sayStupid, doSomethingNerdy};
}

const abed = Nerd('abed');

abed.sayName(); //my name is jeff
abed.sayStupid();
abed.doSomethingNerdy(); // nerd stuff


//Factory fancy
const newPerson = (name, age) => {
  const sayHello = () => console.log('hello world');
  return {name, age, sayHello};
}

//Factory Classic
function somePerson(name, age){
  function sayHello() {
    console.log('hello world');
  }
  return {name, age, sayHello};
}

const foo = "foo";

( innerFoo => console.log(innerFoo))(foo);

//Module.
const calculator = ( () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    add,
    subtract,
    multiply,
    divide
  }
}) ();

//JS Class
class pierceFanClub {
  constructor(name, age, catchphrase) {
    this.name = name;
    this.age = age;
    this.catchphrase = catchphrase;
  }

  let name;
  get name() {
    return "smelly boy";
  }

  /*set name() {
    return "hello";
  }*/

  /*
  set name(value) {
    if (value.length < 2) {
      console.log("Who the hell are you! Not welcome in my fanclub.")
      return;
    } else {
      this.name = value;
    }
  }*/

  sayHello = () => {
    console.log("Hello, I am", this.name, "age", this.age, "and I am", this.catchphrase);
  }

}

let pierce = new pierceFanClub("Pierce", 999, "Streets ahead");
pierce.sayHello();

let jeffrey = new pierceFanClub("a", 30, "that's the winger guarantee");

console.log(jeffrey.name);


//Function that only runs once and does not polute
//global namespace.
(function () {
  console.log("Don't call me Shirley, Shirley!");
})();

const cityCollege = ( function() {
  const text = () => console.log("Why is their dean so mean?");
  return text;
} )();

cityCollege();

console.log(calculator.add(1, 1));

//Factory
const jeff = newPerson('Jeff', 28);
const britta = somePerson('Britta', 26);

//Classic Constructor
const dean = new Person('Dean Machine', 35);
const starburns = new Person('Starburns', 40);

//Create new collection from existing objects.
const greendale = {jeff, britta, dean, starburns};

//Create array from existing objects
const cooldale = [jeff, britta]

console.log(jeff.name);
jeff.sayHello();
console.log(jeff);

console.log(britta.name);
britta.sayHello();
console.log(britta);
console.log(dean);
console.log(starburns)