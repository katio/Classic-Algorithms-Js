function quickSortSwap(list, low, high) {
  if (low < high) {
    const pivot = list[low];
    let left = low;
    let right = high;
    while (left !== right) {
      while (list[right] > pivot) {
        right--;
      }
      while (list[left] < pivot) {
        left++;
      }
      if (left < high) {
        [list[left], list[right]] = [list[right], list[left]];

        right--;
        left++;
      }
    }
    quickSortSwap(list, low, left - 1);
    quickSortSwap(list, right + 1, high);
  }
  return list;
}

module.exports = quickSortSwap;
