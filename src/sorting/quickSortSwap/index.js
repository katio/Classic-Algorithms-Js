function quickSortSwap(list, low, high) {
  if (list.length <= 1) {
    return list;
  }
  const pivot = list[low];
  const leftWall = low;
  for (let i = low + 1; i <= high; i++) {
    if (list[i] < pivot) {
      [list[i], list[leftWall]] = [list[leftWall], list[i]];
      leftWall++;
    }
  }
  [list[leftWall], list[i]] = [pivot, list[leftWall]];
  return [
    ...quickSortSwap(list, low, leftWall),
    pivot,
    ...quickSortSwap(list, leftWall + 1, high),
  ];
}

module.exports = quickSortSwap;
