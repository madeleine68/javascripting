// Brute Force O(n x k)
var rotate = function(nums, k) {
    
    let n = nums.length;
    let i = 0
    while (k > 0) {
        let temp = nums[n-1];

        for (let i = n-1; i > 0; i--){
            nums[i] =  nums[i-1];
        }
        nums[i] = temp;
        k--;
    }
};

// Reverse function Time complexity: O(n)
// Space complexity: O(1)

var rotate = function(nums, k) {
   
    let n = nums.length   
    k %= n
    

    // define a function to reverse elements based on their indices
    const swap = function (nums, i, j) {
         while (i < j) {
             
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            i++;
            j--;
        }
    }
    // 1. reverse whole array
    swap(nums, 0, n-1);
    // 2. reveres first k numbers
    swap(nums, 0, k-1);
    // 3. reverse last n-k numbers 
    swap(nums, k, n-1);
 
  
};

