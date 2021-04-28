const {
  unorderedList20000,
  preorderedList20000,
} = require('../../common/constants');
let mergeSort = require('./index');

describe('mergeSortNonPure sorting', () => {
  it('Should correctly order a list of 20000 elements', () => {
    let orderedList20000 = mergeSort(unorderedList20000);
    expect(orderedList20000).toEqual(preorderedList20000);
  });
});
