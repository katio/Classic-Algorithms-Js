function quickSortSwap(list, low, high) {
  if (low < high) {
    const pivot = list[high];
    let leftWall = low;
    for (let i = low; i < high; i++) {
      if (list[i] < pivot) {
        [list[leftWall], list[i]] = [list[i], list[leftWall]];
        leftWall++;
      }
    }
    [list[leftWall], list[high]] = [list[high], list[leftWall]];
    quickSortSwap(list, low, leftWall - 1);
    quickSortSwap(list, leftWall + 1, high);
  }
  return list;
}

module.exports = quickSortSwap;
