function insertionSort(array) {
    // Only change code below this line
    const list = array.slice()
    for (let i = 1; i < list.length; i++){
      for(let j = i; j > 0; j--){
        if(list[j] < list[j-1]){
          [list[j], list[j-1]] = [list[j-1], list[j]]
        }
      }
    }
    return list;
    // Only change code above this line
  }
  insertionSort([4,7,3,1])