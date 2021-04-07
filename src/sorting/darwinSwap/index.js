function isOrdered(list){
  for(let i = 0; i < list.length - 1; i++){
    if (list[i] > list[i+1]){
      return false;
    }
  }
  return true; 
}

function darwin(list){
  while(!isOrdered(list)){
    const index1 = Math.floor(Math.random() * list.length);
    const index2 = Math.floor(Math.random() * list.length);
    [list[index1], list[index2]] = [list[index2], list[index1]];
  }
  return list;
}

module.exports = darwin