/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    let maxLength = 0;
    let windowStart = 0;
    const charFrequencyMap = new Map();
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        let rightChar = s[windowEnd];
      
        if (!charFrequencyMap.get(rightChar)) charFrequencyMap.set(rightChar, 1)
        else charFrequencyMap.set(rightChar, charFrequencyMap.get(rightChar) + 1);
        
        //more than k so we need to decrement the charFrequencyMap
        while(charFrequencyMap.size > k) {
            let leftChar =  s[windowStart];
            if(charFrequencyMap.get(leftChar) > 1) charFrequencyMap.set(leftChar, charFrequencyMap.get(leftChar) - 1);
            //so there is one left charctor, delete it
            else charFrequencyMap.delete(leftChar);
            windowStart++
            
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
};