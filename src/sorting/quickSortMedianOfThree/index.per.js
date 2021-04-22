const {
  sortingPerformace,
} = require('../../common/functions/sortingPerformance');
const { unorderedList20 } = require('../../common/constants');
const quickSortMedian = require('./index');

sortingPerformace(quickSortMedian, unorderedList20, 0, 19);
