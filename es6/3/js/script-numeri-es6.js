// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const mainArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const returnArray = (array, num1, num2) => {
  let newArray = [];
  array.forEach((item) => {
    if (array.indexOf(item) > array.indexOf(num1) && array.indexOf(item) < array.indexOf(num2)) {
      newArray.push(item);
    }
  });
  return newArray;
}

console.log(returnArray(mainArray, 10, 20));
