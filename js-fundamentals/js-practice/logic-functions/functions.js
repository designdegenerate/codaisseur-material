const sayHello = (name) => {
  const greeting = 'hello ' + name;
  console.log(greeting);
}

sayHello('Dave');
sayHello('Jeroen');

const learnTopic = (topic) => {
  console.log("we are learning " + topic);
}

learnTopic("functions");
learnTopic("loops");
learnTopic("scope");
learnTopic("conditionals");

const add = (num1, num2) => {
  return num1 + num2;
}


sum = add(4, 8);
console.log(sum);