/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let minWindowSize = Infinity;
    let currentWindowSum = 0;
    let windowStart = 0
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        currentWindowSum += nums[windowEnd];
        
        while(currentWindowSum >= target) {
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart+1)
            currentWindowSum -= nums[windowStart];
            windowStart++
        }
        
    }
    return (minWindowSize !== Infinity) ? minWindowSize : 0 
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))