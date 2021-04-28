const {
  sortingPerformace,
} = require('../../common/functions/sortingPerformance');
const { unorderedList20000 } = require('../../common/constants');
const mergeSort = require('./index');

sortingPerformace(mergeSort, unorderedList20000);
