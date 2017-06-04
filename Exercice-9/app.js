//Execute each js file with node - ejecutalo con node
  // Print only the names that begin with the letter M - Imprimir solo los nombres que comienzan con la letra M

//Let's do it in a functional way
const names = ['German', 'Nicolas', 'Martin', 'Micaela', 'Mateo', 'Matias', 'John', 'Gonzalo', 'Esteban', 'Paula', 'Victoria', 'Bautista', 'Carolina', 'Analia', 'Edward', 'Mirtha'];
const foo = names.filter((name) => name.toUpperCase().startsWith('M'));
console.log(foo);

//Result = Martin, Micaela, Mateo, Matias, Mirtha
