// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
function returnArray(array, num1, num2) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) > num1 && array.indexOf(array[i]) < num2) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var mainArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(returnArray(mainArray, 2, 7));
