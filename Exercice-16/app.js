//Execute each js file with node - ejecutalo con node
  // Get the sum of a array numbers - Obtener la suma total de un array de numeros

//Let's do it in a functional way

const numbers = [5, 5, 5, 10, 30];

const total = numbers.reduce( (prev, curr) => prev + curr );
console.log(total);

// Result of 5 + 5 + 5 + 10 + 30 = 55
