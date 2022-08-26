var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currentSub = nums[0]
    
    for (let i = 1; i < nums.length; i++){
        const right = nums[i];
        // If sum + item i is larger than sum, update sum with this variable
        // (as this is the largest subarray). If it is smaller, update sum with
        //  the variable i as we are starting a new subarray at index i.
        currentSub = Math.max(right, currentSub + right)
        
        maxSub = Math.max(maxSub, currentSub)
    }
}