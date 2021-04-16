// function quickSortSwap(list, low, high) {
//   if (low < high) {
//     const pivot = list[low];
//     let left = low;
//     let right = high;
//     while (left !== right) {
//       while (list[right] > pivot) {
//         right--;
//       }
//       while (list[left] < pivot) {
//         left++;
//       }
//       if (left < high) {
//         [list[left], list[right]] = [list[right], list[left]];

//         right--;
//         left++;
//       }
//     }
//     quickSortSwap(list, low, left - 1);
//     quickSortSwap(list, right + 1, high);
//   }
//   return list;
// }

//  Gayle Laakmaan CCI pag 148. IT'S NOT WORKING
function partition(list, left, right){
  let pivot = list[left + (right - left)/2]
  while(left <= right){
    while(list[left] < pivot) left++
    while(list[right] > pivot) right--
    if(left <= right){ // If true the list is already ordered
      [list[left], list[right]] = [list[right], list[left]]; //swap
      left++
      right--
    }
  }
  return left
}

function quickSortSwap(list, left, right){
  let index = partition(list, left, right)
  if(left < index - 1){
    quickSortSwap(list, left, index -1)
  }
  if(index < right){
    quickSortSwap(list, index, right)
  }
}

module.exports = quickSortSwap;
