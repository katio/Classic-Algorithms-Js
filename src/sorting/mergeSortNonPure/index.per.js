const measureFunction = require('../../common/functions/measureFunction');
const { unorderedList20000 } = require('../../common/constants');
const mergeSort = require('./index');

const boundFunction = mergeSort.bind(
  null,
  unorderedList20000,
  0,
  unorderedList20000.length - 1
);
measureFunction(boundFunction, 10000);
