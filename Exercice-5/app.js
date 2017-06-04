//Execute each js file with node - ejecutalo con node
  // Read the numbers and return the square of the product of both numbers - Leer dos numeros y devolver el cuadrado del producto de ambos numeros

//Let's do it in a functional way
const cube = (num1, num2) => {
  let product = num1 * num2;
  return `The square of the product of ${num1} and ${num2} is equal to ${Math.pow(product, 3)}`;
}
console.log( cube(2, 3) ); //For example two and three (2, 3)

//Result = 216
