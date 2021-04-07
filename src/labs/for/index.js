
function traditionalFor(arr){
  for(let i=0;i<arr.length;i++){
  console.log(i)
  }
}

function improvedFor(arr){
  for(let i=0, len = arr.length;i<len;i++){
  console.log(i)
  }
}

function improvedFor2(arr){
  let len = arr.length
  for(let i=0;i<len;i++){
  console.log(i)
  }
}

function improvedWhile(arr){
  let i=0, len = arr.length
  while(i<len){
    console.log(i)
    i++
  }
}

function smartWhile(arr){
  let i = arr.length
  while(i--){
    console.log(i)
  }
}

function normalforEach(arr){
  arr.forEach((element, i) =>{
    console.log(i)
  })
}

function normalForIn(arr){
  for(let i in arr){
    console.log(i)
  }
}

let arr = new Array(20000)
arr.fill(null)

// console.time('tradicional')
// traditionalFor(arr)
// console.timeEnd('tradicional') // tradicional: 17.644s

// console.time('mejorado')
// improvedFor(arr)
// console.timeEnd('mejorado') // mejorado: 18.429s

// console.time('mejorado2')
// improvedFor2(arr)
// console.timeEnd('mejorado2') // mejorado: 18.226s

// console.time('while')
// improvedWhile(arr)
// console.timeEnd('while') // while: 18.544s

// console.time('smartWhile')
// smartWhile(arr)
// console.timeEnd('smartWhile') // smartWhile: 18.826s

// console.time('normalForEach')
// normalforEach(arr)
// console.timeEnd('normalForEach') // normalForEach: 18.363s

console.time('normalForIn')
normalForIn(arr)
console.timeEnd('normalForIn') // normalForIn: 18.642s


