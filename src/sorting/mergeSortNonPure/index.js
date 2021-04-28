function mergeSort(list, low, high) {
  if (low >= high) {
    return { list, low, high };
  }
  const mid = Math.floor(list.length / 2);
  return merge(mergeSort(list, low, mid - 1), mergeSort(list, mid, high));
}

function merge(leftObj, rightObj) {
  const list = [];

  let leftLow = leftObj.low;
  let leftHigh = leftObj.low;

  let rightLow = rightObj.high;
  let rightHigh = rightObj.high;

  const sourceList = leftObj.list; // either leftObj.list or rightObj.list

  while (leftLow <= leftHigh || rightLow <= rightHigh) {
    if (
      leftLow > leftHigh ||
      (rightLow <= rightHigh && sourceList[leftLow] >= sourceList[rightLow])
    ) {
      list.push(sourceList[rightLow]);
      rightLow++;
    } else {
      list.push(sourceList[leftLow]);
      leftLow++;
    }
  }
  return { list, low: leftObj.low, high: rightObj.high };
}

module.exports = mergeSort;
