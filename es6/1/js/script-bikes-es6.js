// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

const bike = [
  { 'name': 'bike-1', 'weightKg': 11},
  { 'name': 'bike-2', 'weightKg': 9},
  { 'name': 'bike-3', 'weightKg': 10}
]

let lightBike = bike[0];

for (let i = 1; i < bike.length; i++) {
  if (bike[i].weightKg < lightBike.weightKg) {
    lightBike = bike[i];
  }
}

console.log(`${lightBike.name} is the lightest bike`);
