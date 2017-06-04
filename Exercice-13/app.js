//Execute each js file with node - ejecutalo con node
  // Print ONLY THE FIRST even number - Imprimir SOLO EL PRIMER numero par

//Let's do it in a functional way
const numbers = [5, 7, 33, 88, 92];
const even = numbers.find(num => num % 2 === 0);
console.log(even);

//88 because is the firts even number
