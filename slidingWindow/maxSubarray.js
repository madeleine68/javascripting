// find the max sum subarray of fixed size k
const findMaxSumSubarray = (arr, k) => {
    let maxValue = -Infinity;
    let currentRunningSum  = 0;

    for(let i = 0; i < arr.length-1; i++){
        //add value to the currentRunning sum
        currentRunningSum += arr[i];
        // reaching to the k size , we have k element in the currentrunnigSum
        //value of i telling us how far we are in the array
        if(i >= k-1){
            //check the max value and update it
            maxValue = Math.max(maxValue, currentRunningSum);
            // get rid of the farthest elemnt in the currentRunningSum
            currentRunningSum -= arr[i - (k-1)]
        }
    }

    return maxValue;
}   

console.log(findMaxSumSubarray([4,2,1,7,8,1,2,8,1,0], 3))