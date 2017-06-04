//Execute each js file with node - ejecutalo con node
  // Get the average of the array numbers - Obtener el promedio de numeros del array

//Let's do it in a functional way

const numbers = [2, 4, 60, 8, 10];
const average = numbers.reduce( (a, b) => {
  return a + b
});
const result = average / numbers.length;
console.log(result);

// Result = 16.8
