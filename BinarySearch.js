/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let min = 0
    let max = nums.length-1
    
    while (min <= max) {
        let mid = min + Math.floor((max - min) / 2);
        
         if (nums[mid] === target) {
             return mid
         } else if (target > nums[mid]) {
                 min = mid + 1  
         } else {
                 max = mid -1
         }
    }
    return -1
   
};