

function insertionSort(list) {
  console.table(list)
  for (let i = 1; i < list.length; i++) {
    let j = i - 1
    let currentElement = list[i]
    while (j > 0 && currentElement < list[j]) {
      /*Sort circuit, j > 0 is not really needed in JavaScript because any comparison with NaN is false*/
      list[j + 1] = list[j]  /* Move one element */
      j--
    }
    list[j + 1] = currentElement
  }
  console.table(list)
  return list;
}

module.exports = insertionSort;




