function swapDestructuring(a, b) {
  [a, b] = [b, a]
}
function swapAux(a, b) {
  var aux = a
  a = b
  b = aux
}


x = 1
y = 2

console.time('swapDestructuring')
for (let i = 0; i < 100000; i++) {
  swapDestructuring(x, y)
}
console.timeEnd('swapDestructuring')

console.time('swapAux')
for (let i = 0; i < 100000; i++) {
  swapAux(x, y)
}
console.timeEnd('swapAux')