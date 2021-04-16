function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }
  const pivot = list[list.length - 1];
  const lower = [];
  const greater = [];
  for (let i = 0; i < list.length - 1; i++) {
    list[i] < pivot ? lower.push(list[i]) : greater.push(list[i]);
  }
  return [...quickSort(lower), pivot, ...quickSort(greater)];
}

module.exports = quickSort;
