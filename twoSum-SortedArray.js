var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    
    while (start < end) {
          if (nums[start] + nums[end] === target) {
                return [start+1, end+1];
            } else if ((nums[start] + nums[end]) > target){
                end --;
            } else {
                start ++
            }
    }
    return -1
  
};