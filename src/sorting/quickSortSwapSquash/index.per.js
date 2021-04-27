const {
  sortingPerformace,
} = require('../../common/functions/sortingPerformance');
const { unorderedList20000 } = require('../../common/constants');
const quickSortSwapSquash = require('./index');

sortingPerformace(quickSortSwapSquash, unorderedList20000, 0, 19);
