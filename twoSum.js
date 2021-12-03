/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */ 
// Brute Force  : Time complexity: O(n^2) ; Space complexity: O(1)
 var twoSum = function(nums, target) {
    for (let i = 0 ; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j] === target) {
                return [i,j]
            }
        }
    }
};

//2nd approach One-pass Hash Table; Time complexity: O(n); Space complexity: O(n)

var twoSum = function(nums, target) {
     const obj = {} 
     for (let i = 0 ; i < nums.length; i++) {
         if (target-nums[i] in obj )  {
             return [ obj[target-nums[i]], i]      
         }
         obj[nums[i]] = i
     }
 };