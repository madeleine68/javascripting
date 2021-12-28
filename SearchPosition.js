// Given a sorted array of distinct integers and a target value, return the index if the target
//  is found. If not, return the index where it would be if it were inserted in order.
// What if the target value is not found?
// In this case, the loop will be stopped at the moment when max < min and nums[max] < target < nums[min].
// Hence, the proper position to insert the target is at the index min.

var searchInsert = function(nums, target) { 
    let min = 0;
    let max = nums.length -1;
    
    let obj = {};

    while (min <= max) {
        
        let mid = min + Math.floor((max-min)/2);
        
        if (nums[mid] === target){
            return mid;
        } else if (target > nums[mid]) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return min
};