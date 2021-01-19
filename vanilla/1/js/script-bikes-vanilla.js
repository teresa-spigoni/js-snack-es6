// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

var bike = [
  { 'name': 'bike-1', 'weightKg': 11},
  { 'name': 'bike-2', 'weightKg': 9},
  { 'name': 'bike-3', 'weightKg': 10}
]

var lightBike = bike[0];

for (var i = 1; i < bike.length; i++) {
  if (bike[i].weightKg < lightBike.weightKg) {
    lightBike = bike[i];
  }
}

console.log(lightBike.name + ' is the lightest bike');

// quello che avevo fatto
// if (bike[0].weightKg < bike[1].weightKg && bike[2].weightKg) {
//   console.log(bike[0].name + ' is the lightest bike');
// } else if (bike[1].weightKg < bike[0].weightKg && bike[2].weightKg) {
//   console.log(bike[1].name + ' is the lightest bike');
// } else {
//   console.log(bike[2].name + ' is the lightest bike');
// }
