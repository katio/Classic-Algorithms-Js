const darwinShuffle = require("../../sorting/darwinShuffle");
const darwinSwap = require("../../sorting/darwinSwap");

const unorderedList1 = [8, 2, 1, 6, 3, 7, 4, 5];
const unorderedList2 = [8, 2, 1, 6, 3, 7, 4, 5];

console.time('shuffle');
console.table(darwinShuffle(unorderedList1));
console.timeEnd('shuffle');

console.time('swap');
console.table(darwinSwap(unorderedList2));
console.timeEnd('swap');


