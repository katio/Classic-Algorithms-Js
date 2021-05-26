function quickSortSwap(list, low, high) {
  if (low < high) {
    const pivot = list[high];
    let leftWall = low;
    for (let i = low; i < high; i++) {
      if (list[i] < pivot && i > leftWall) {
        [list[leftWall], list[i]] = [list[i], list[leftWall]];
        leftWall++;
      }
    }
    if(list[leftWall]<list[high]){
        [list[leftWall], list[high]] = [list[high], list[leftWall]];
    }

    quickSortSwap(list, low, leftWall - 1);
    quickSortSwap(list, leftWall + 1, high);
  }
  return list;
}

let arr = []
for(let i = 0; i < 20000; i++){
    arr.push(i);
}
//arr = _.shuffle(arr)
//console.log('arr', arr)
const sorted = quickSortSwap(arr, 0, arr.length - 1)
console.log('sorted', sorted)
