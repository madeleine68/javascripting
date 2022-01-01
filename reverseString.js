// Approach : Two pointer, In-Place, 
// Complexity Analysis
// Time complexity : O(N)  time to swap N/2 elements.
// Space complexity : O(1) 

var reverseString = function(s) {
    let i = 0;
    let j = s.length -1;
    
    while (i<j) {
        let temp = s[i];
        s[i] = s[j] 
        s[j] = temp
        
        i++
        j--
    } return s
};
