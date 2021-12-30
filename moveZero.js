// Brute Force 
var moveZeroes = function(nums) {
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
