var countSubstrings = function(s) {
    let res = 0
    
    for (let i = 0; i < s.length; i++){
        
        //odd substrings
        let left = right = i
        while(s[left] === s[right] && left >= 0 && right < s.length) {
            res++
            left--
            right++
        }
        
        //even substrings
         left = i
         right = i + 1
        while(s[left] === s[right] && left >= 0 && right < s.length) {
            res++
            left--
            right++
        }
    }
    return res
};