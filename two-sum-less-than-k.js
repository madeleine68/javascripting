/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    
   //  for (let i = 0; i < nums.length-1; i++){
   //      for (let j = i+1; j < nums.length; j++) {
   //          let sum = nums[i]+nums[j]
   //          if(sum < k) {
   //               res.push(sum)  
   //          } 
   //      }
   //  } 
   //  if (!res.length) return -1
   //  const arr = res.sort((a,b) => b-a);
   // return (arr[0])
    const arr = nums.sort((a,b) => a-b);
    let left = 0
    let right = arr.length - 1;
    let answer = -1
      
    while (left < right) {
        let sum = arr[left] + arr[right] 
        if (sum >= k) {  
            right--; 
        } 
        else if (sum < k) {
            left++
            answer = Math.max(answer, sum)
        }  
    }
    return answer
};

console.log(twoSumLessThanK([5,5,5], 15))