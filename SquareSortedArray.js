// Given an integer array nums sorted in non-decreasing order, return an array of the squares of
//  each number sorted in non-decreasing order.

//Brute Force
var sortedSquares = function(nums) {

    let res = nums.map(elem => elem ** 2)  //O(n)
    return res.sort((a,b) => a-b)  //O(nlogn)
    
};
//Two pointer ---> O(n)
var sortedSquares = function(nums) {

    // let res = nums.map(elem => elem ** 2)
    // return res.sort((a,b) => a-b)
    let left = 0;
    let right = nums.length -1;
    let res =[]
    while(left <= right) {
        let rightSquare = nums[right] * nums[right]
        let leftSquare = nums[left] * nums[left]
        if (leftSquare < rightSquare) {
            res.unshift (rightSquare);
            right --;
        }  else {
           res.unshift(leftSquare)
           left ++;
        } 
    } return res
};