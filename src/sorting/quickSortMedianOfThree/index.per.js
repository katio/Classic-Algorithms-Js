const measureFunction = require('../../common/functions/measureFunction');
const { unorderedList20000 } = require('../../common/constants');
const quickSort = require('./index');

const boundFunction = quickSort.bind(
  null,
  unorderedList20000,
  0,
  unorderedList20000.length - 1
);
measureFunction(boundFunction, 10000);
