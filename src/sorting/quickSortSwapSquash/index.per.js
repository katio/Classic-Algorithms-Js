const {
  sortingPerformace,
} = require('../../common/functions/sortingPerformance');
const { unorderedList20 } = require('../../common/constants');
const quickSortSwapSquash = require('./index');

sortingPerformace(quickSortSwapSquash, unorderedList20, 0, 19);
