function selectionSort(array) {
    // Only change code below this line
  
    for (let i = 0; i < array.length; i++) {
      //assume the samllest element is the first element
    let min = i;
    // loop through the resst of array(unsorted part)
      for (let j = i+1 ; j < array.length; j++)  {
        //update the local min
        if (array[j] < array[min]) min = j;
      }
      
      [array[i], array[min]] = [array[min], array[i]]
    }
    return array;
    // Only change code above this line
  }
  const res = selectionSort([4,1,5,7])
  console.log(res)