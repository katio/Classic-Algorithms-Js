const measureFunction = require('../../common/functions/measureFunction');
const { unorderedList20000 } = require('../../common/constants');
const mergeSort = require('./index');

const boundFunction = mergeSort(unorderedList20000);
measureFunction(boundFunction, 10000);
