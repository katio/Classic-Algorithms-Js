function isOrdered(list){
  for(let i = 0; i < list.length - 1; i++){
    if (list[i] > list[i+1]){
      return false;
    }
  }
  return true; 
}

function randomSwap(list){
  const index1 = Math.floor(Math.random() * list.length);
  const index2 = Math.floor(Math.random() * list.length);
  [list[index1], list[index2]] = [list[index2], list[index1]];
}

function darwin(list){
  while(!isOrdered(list)){
    randomSwap(list)
  }
  return list;
}

module.exports = darwin