// Brute Force 
// Given an integer array nums, move all 0's to the end of it while maintaining the 
// relative order of the non-zero elements.
var  = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++){  
        if (nums[i] === 0){
            count++
            nums.splice(i,1)
            i--
        }
    } 
    while (count > 0) {
        nums.push(0)
        count--;
    }
    return nums    
};
