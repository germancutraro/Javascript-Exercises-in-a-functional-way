//Execute each js file with node - ejecutalo con node
  // Print only the correct emails that finish with .com - Imprimir unicamente los emails sean correctos y terminen con .com

//Let's do it in a functional way
//L
const emails = ['germancutraro@hotmail.com', 'germancutraro', 'johndoe@gmail.com', 'notAndEmail', 'trucky@gmail'];
const foo = emails.filter((email) => email.includes('@') && email.endsWith('.com'));
console.log(foo);

//Result = germancutraro@hotmail.com, johndoe@gmail.com
