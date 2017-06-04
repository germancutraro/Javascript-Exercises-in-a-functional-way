//Execute each js file with node - ejecutalo con node
  // Get the greater age - Obtener la mayor edad

//Let's do it in a functional way

const persons = [
  {name: 'Daniel', age: 27},
  {name: 'Nick', age: 16},
  {name: 'Nadia', age: 24}
];

const ages = persons.map(person => person.age);
const older = ages.reduce((a, b) => {
  if (a > b)
    return a
  else
    return b
});

console.log(older);

// Result = 27
