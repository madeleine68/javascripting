/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while (i <= right) {
      if (nums[i] === 0) {
        //swap
        [[nums[i], nums[left]]] = [[nums[left], nums[i]]];
        left++;
        i++;
      } else if (nums[i] === 2) {
        [[nums[i], nums[right]]] = [[nums[right], nums[i]]];
        right--;
        // we dont want to increment i so add this line to cancel out i++ for while loop or add i++ for others
        // i--
      } else {
        i++;
      }
    }
  };
  