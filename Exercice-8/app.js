//Execute each js file with node - ejecutalo con node
  // Apply the square of each number of an array - Aplicarle su cuadrado a cada numero de un arreglo

//Let's do it in a functional way
const numbers = [2, 3, 4, 5, 10, 33];
const squares = numbers.map( (n) => Math.pow(n, 2)); // You can do n * n too
console.log(squares);

//Result = 4, 9, 16, 25, 100, 1089
