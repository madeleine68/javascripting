var longestCommonPrefix = function(strs) {
    let res = strs[0];
    
    for (let i = 0; i < strs.length; i++) { 
        for (let j = 0; j < res.length; j++) {     
            if (strs[i][j] !== res[j]) {
               res = res.slice(0,j);
            }
        }
    }
    
    return res;
};

// Time complexity : O(S) , where S is the sum of all characters in all strings.
// Space complexity : O(1). We only used constant extra space.