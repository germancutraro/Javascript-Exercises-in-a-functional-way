//Execute each js file with node - ejecutalo con node
  // Print only people who are greater than 18 years old - Imprimir solo las personas que sean mayores de edad (> 18)

//Let's do it in a functional way

const persons = [
  {name: 'John', age: 27},
  {name: 'Nicholas', age: 16},
  {name: 'Adney', age: 15},
  {name: 'Anton', age: 46},
];
const adults = persons.filter(person => person.age > 18);
const names = adults.map(n => n.name); //You can use map for the new array generate by filter, or create a for loop like below
// for (person of adults) {
//   console.log(person.name);
// }
console.log(names);
//Result = John - Anton
