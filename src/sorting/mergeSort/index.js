function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const mid = Math.floor(list.length / 2);
  const leftList = list.slice(0, mid);
  const rightList = list.slice(mid);

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(leftList, rightList) {
  const list = [];
  let leftElementPosition = 0;
  let rightElementPosition = 0;
  while (
    leftList[leftElementPosition] !== undefined ||
    rightList[rightElementPosition] !== undefined
  ) {
    if (
      leftList[leftElementPosition] === undefined ||
      (rightList[rightElementPosition] !== undefined &&
        leftList[leftElementPosition] >= rightList[rightElementPosition])
    ) {
      list.push(rightList[rightElementPosition]);
      rightElementPosition++;
    } else {
      list.push(leftList[leftElementPosition]);
      leftElementPosition++;
    }
  }
  return list;
}

module.exports = mergeSort;
