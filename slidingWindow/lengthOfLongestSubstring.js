/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //     let maxLength = 0;
    //     const hash = new Map
    //     let windowStart = 0
        
    //     for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
    //         let rightChar = s[windowEnd];
            
    //         if(hash.has(rightChar)) {
    //             while(windowStart <= hash.get(rightChar)){
    //                 let leftChar = s[windowStart]
    //                 hash.delete(leftChar)
    //                 windowStart++
    //             }
    //         } 
    //         hash.set(rightChar, windowEnd)
    //         maxLength = Math.max(maxLength, hash.size);
        
    //     };
    //    return maxLength;
        let maxLength = 0;
        const charSet = new Set();
        let windowStart = 0
        
         for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
             let rightChar = s[windowEnd];
             
             while(charSet.has(rightChar)){
                let leftChar = s[windowStart]
                charSet.delete(leftChar);
                windowStart++
             }
             charSet.add(rightChar);
             maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
         }
        return maxLength
    }