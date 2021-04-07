const darwinSwap = require("../../sorting/darwinSwap");
const darwinShuffle = require("../../sorting/darwinShuffle");

const unorderedList8 = [8, 2, 1, 6, 3, 7, 4, 5];

console.time('swap');
console.table(darwinSwap(unorderedList8));
console.timeEnd('swap');

console.time('shuffle');
console.table(darwinShuffle(unorderedList8));
console.timeEnd('shuffle');

