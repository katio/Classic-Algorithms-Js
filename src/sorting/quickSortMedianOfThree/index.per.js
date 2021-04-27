const { sortingPerformace} = require('../../common/functions/sortingPerformance');
const { unorderedList20000 } = require('../../common/constants');
const quickSortMedian = require('./index');

sortingPerformace(quickSortMedian, unorderedList20000, 0, 19);
