const _shuffle = require("lodash/shuffle")

function isOrdered(list){
  let listLength = list.length
  for(let i=0; i<listLength-1; i++){
    if(list[i] > list[i+1]){
      return false
    }
  }
  return true
}

function darwin(list){
  while(!isOrdered(list)){
    list = _shuffle(list)
  }
  return list
}

module.exports = darwin