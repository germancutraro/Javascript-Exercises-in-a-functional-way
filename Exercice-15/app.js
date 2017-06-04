//Execute each js file with node - ejecutalo con node
  // Iterate a object printing all the information - Itera sobre un array mostrando toda la informacion

//Es6 Feature
const name = 'German Cutraro',
    birthday = '15-09-1999'
    country = 'Argentina',
    favSong = 'I Wish you were here, Pink Floyd',
    favLang = 'Javascript';

const me = {
  name,
  birthday,
  country,
  favSong,
  favLang
};

for (let index in me) {
    console.log(me[index]);
}
