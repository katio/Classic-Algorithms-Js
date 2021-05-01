function mergeSort(list, low, high) {
  if (high - low < 1 ) {
    return { list, low, high };
  }
  const mid = Math.floor(low + (high - low)/2);
  const leftObject = mergeSort(list, low, mid)
  const rightObject = mergeSort(list, mid + 1, high)
  return merge( leftObject, rightObject);
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

const list = [1,-1, 24, 6,9]
console.log('list before')
console.table(list)
const result = mergeSort(list,0,4)
console.log('list after')
console.table(result.list)

module.exports = mergeSort;
