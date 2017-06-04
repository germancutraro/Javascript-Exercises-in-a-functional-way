//Execute each js file with node - ejecutalo con node
  // Get the greater number from a numbers array - Obtener el numero mayor de un array de numeros

//Let's do it in a functional way

const numbers = [122, 190, 395, 653, 29, 1, 65, 2312, 3333];

const total = numbers.reduce( (prev, curr) => prev > curr ? prev : curr );

console.log(total);

// Result = 3333
