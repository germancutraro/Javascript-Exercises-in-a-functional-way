//Execute each js file with node - ejecutalo con node
  // Return the even numbers from an array - Devolver de un array los números pares

//Let's do it in a functional way
const numbers = [0, 1, 2, 4, 7, 20, 36, 50, 312, 344, 21, 87, 33, 34, 81, 100];
const evens = numbers.filter( n => n % 2 === 0);
console.log(evens);

//Result = 0, 2, 4, 20, 36, 50, 312, 344, 34, 100
