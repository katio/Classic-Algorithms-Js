let quickSortSwap = require('./index');
let {unorderedList20000, preorderedList20000} = require('../../common/constants');
describe('quickSortSwapSquash sorting', () => {
  it('Should correctly order a list of 8 elements with a negative number', () => {
    let unorderedList8 = [4, 3, 2, -2, 12, 1, 5, 6];
    let preorderedList8 = [-2, 1, 2, 3, 4, 5, 6, 12];
    let orderedList8 = quickSortSwap(unorderedList8, 0, 7);
    expect(orderedList8).toEqual(preorderedList8);
  });
  it('Should correctly order a list of 20 elements', () => {
    let unorderedList20 = [
      6,
      4,
      11,
      13,
      8,
      7,
      18,
      20,
      12,
      2,
      15,
      9,
      17,
      10,
      3,
      14,
      5,
      1,
      19,
      16,
    ];
    let preorderedList20 = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    let orderedList20 = quickSortSwap(unorderedList20, 0, 19);
    expect(orderedList20).toEqual(preorderedList20);
  });
  it('Should correctly order a list of 20000 elements', () => {
    let orderedList20000 = quickSortSwap(unorderedList20000);
    expect(orderedList20000).toEqual(preorderedList20000);
  });
});
