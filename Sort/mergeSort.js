function mergeSort(array) {
    if (array.length === 1) {
      return array;
    } else {
      const splitIndex = Math.floor(array.length / 2);
      return merge(
        mergeSort(array.slice(0, splitIndex)),
        mergeSort(array.slice(splitIndex))
      );
    }
    // Merge two sorted arrays
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      // After looping ends, one array is empty, and other array contains only
      // values greater than all values in `merged`
      return [...merged, ...array1, ...array2];
    }
  }  


  function mergeSortedArrays(array1, array2){

    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);