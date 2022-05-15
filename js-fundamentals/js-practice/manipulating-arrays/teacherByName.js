const teachers = [
  { name: "Rein", age: 32 },
  { name: "Wouter", age: 25 },
  { name: "Matias", age: 28 },
];

const upperCaseNames = teachers.map(teacher => {
  return teacher.name.toUpperCase();
});

console.log(upperCaseNames); 
// ['REIN', 'WOUTER, 'MATIAS'], 3 elements but no longer objects