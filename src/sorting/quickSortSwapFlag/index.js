function quickSortSwap(list, low, high) {
  if (low < high) {
    const pivot = list[low];
    let left = low;
    let right = high;
    let direction = 'rtl';
    while (left !== right) {
      if (direction === 'rtl') {
        if (list[right] < pivot) {
          [list[left], list[right]] = [list[right], list[left]];
          direction = 'ltr';
          left++;
        } else {
          right--;
        }
      } else {
        if (list[left] > pivot) {
          [list[left], list[right]] = [list[right], list[left]];
          direction = 'rtl';
          right--;
        } else {
          left++;
        }
      }
    }
    quickSortSwap(list, low, left - 1);
    quickSortSwap(list, right + 1, high);
  }
  return list;
}

module.exports = quickSortSwap;
