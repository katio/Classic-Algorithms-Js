const measureFunction = require('../../common/functions/measureFunction');
const { unorderedList20000 } = require('../../common/constants');
const quickSortSwap = require('./index');

const boundFunction = quickSortSwap.bind(
  null,
  unorderedList20000,
  0,
  unorderedList20000.length - 1
);
measureFunction(boundFunction, 1);
