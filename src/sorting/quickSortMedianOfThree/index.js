// TODO: compare performance between medianThree() only at the beginning or in every partition call

function quickSortSwap(list, low, high) {
  if (low < high) {
    medianOfThreeSwap(list, low, high)
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


function medianOfThreeSwap(list, low, high) {
  // TODO WHY THE FOLLOWING FAIL WITH let instead of var
  var pivotPosition = medianThree(list, low, high)
  [list[pivotPosition], list[list.length-1]] = [list[list.length-1], list[pivotPosition]];
  // TODO WHY THE FOLLOWING SWAP DOESN'T WORK?
  // const auxiliar = list[pivotPosition]
  // list[pivotPosition] = list[list.length-1]
  // list[list.length-1] = auxiliar
}


function medianThree(list, low, high) {
  const middleElementIndex = Math.floor(list.length / 2)
  const firstElement = list[low]
  const middleElement = list[middleElementIndex]
  const lastElement = list[high]

  if (
    (firstElement <= middleElement && firstElement >= lastElement)
    || (firstElement >= middleElement && firstElement <= lastElement)
  )
    return low;
  else if (
    (middleElement <= firstElement && middleElement >= lastElement)
    || (middleElement >= firstElement && middleElement <= lastElement)
  )
    return middleElementIndex;
  else
    return high;
}




module.exports = quickSortSwap;
