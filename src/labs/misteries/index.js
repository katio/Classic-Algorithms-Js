function medianOfThreeSwap(list, low, high) {
  var pivotPosition = 0
  [list[pivotPosition], list[list.length-1]] = [list[list.length-1], list[pivotPosition]]
}

arr = [9,3,4,5,6,7]
console.table(arr)
medianOfThreeSwap(arr,0,5)
console.table(arr)

// the following fails but only in a function
// function sw(){
//   let a = 1
//   let b = 3

//   [a, b] = [b, a]
//   console.log(a) // 3
//   console.log(b) // 1
//   }

//   sw()


// FOLLOWING fails without ;
// function swap(a,b){
//   console.log('hola');
//   [a,b] = [b,a]
//   console.log(a)
//   console.log(b)
// }

// swap(3,4)


