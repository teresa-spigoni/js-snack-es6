// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomNumber (min, max) {
  var random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}

var teams = [
  {'name': 'team-1', 'scoredPoints': 0, 'fouls': 0},
  {'name': 'team-2', 'scoredPoints': 0, 'fouls': 0},
  {'name': 'team-3', 'scoredPoints': 0, 'fouls': 0},
  {'name': 'team-4', 'scoredPoints': 0, 'fouls': 0},
  {'name': 'team-5', 'scoredPoints': 0, 'fouls': 0}
]

for (var i = 0; i < teams.length; i++) {
  teams[i].scoredPoints = randomNumber(1, 10);
  teams[i].fouls = randomNumber(1, 10);
}

console.log(teams);

var nameAndFouls = [];

for (var i = 0; i < teams.length; i++) {
  nameAndFouls.push({
    'name': teams[i].name,
    'fouls': teams[i].fouls
  });
}

console.log(nameAndFouls);
