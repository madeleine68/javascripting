/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {

    let min = 0
    let max = n
    
    while (min <= max) {
        let mid = min + Math.floor((max - min) / 2);
        
         if (isBadVersion(mid)) {
             max = mid -1
         } else if (isBadVersion(mid+1)) {
                  return mid + 1 
         } else {
                 min = mid +1
         }
    }
    return -1
   
    };
};