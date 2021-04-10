function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i;
    let currentElement = list[i];
    while (j > 0 && currentElement < list[j - 1]) {
      /*Sort circuit, j > 0 is not really needed in JavaScript because any comparison with NaN is false*/
      list[j] = list[j - 1]; /* Move one element */
      j--;
    }
    list[j] = currentElement;
  }
  return list;
}

module.exports = insertionSort;
