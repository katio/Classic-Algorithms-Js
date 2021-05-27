const _shuffle = require('lodash/shuffle');
const quickSort = require('../../sorting/quickSortPure');

const arr = [];
for (let i = 0; i < 10000000; i++) {
  arr.push(i);
}

// const unorderedArr = _shuffle(arr);

// console.log(unorderedArr);

// const orderedArr = unorderedArr.sort(function compareNumbers(a, b) {
//   return a - b;
// });

const orderedArr = quickSort(arr);

console.log(orderedArr);
