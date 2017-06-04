//Execute each js file with node - ejecutalo con node
  // Print only the correct emails that finish with .com - Imprimir solo las tareas que esten completadas

//Let's do it in a functional way
//L
const tasks = [
  {task: 'Make a dessert', completed: true},
  {task: 'Listen a ton of Pink Floy songs', completed: true},
  {task: 'Travel to Australia', completed: false}, // :(
  {task: 'Be happy', completed: true}, // :)
  {task: 'Studying a lot', completed: true}, //Always
];
const foo = tasks.filter(task => task.completed === true);
for (a of foo) {
  console.log(a.task);
}

//Result = Make a dessert. Listen a ton of Pink Floy songs. Be happy. Studying a lot
