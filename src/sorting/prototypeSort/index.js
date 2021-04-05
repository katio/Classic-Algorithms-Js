function compareNumbers(a, b) {
  return a - b;
}

function prototypeSort(list){
  return list.sort(compareNumbers)
}

module.exports = prototypeSort