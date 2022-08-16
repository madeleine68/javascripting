/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
 var minAvailableDuration = function(slots1, slots2, duration) {
 
    
    slots1.sort((a,b) => a[0]-b[0])
    slots2.sort((a,b) => a[0]-b[0])
    let pointer1 = 0, 
        pointer2 = 0;
    
    
    while (pointer1 < slots1.length &&  pointer2 < slots2.length ) {
        let intersetLeft = Math.max(slots1[pointer1][0], slots2[pointer2][0])
        let intersetRight = Math.min(slots1[pointer1][1], slots2[pointer2][1])
        
        if (intersetRight - intersetLeft >= duration){
           return [intersetLeft, intersetLeft+duration]
       }
      else if (slots1[pointer1][1] < slots2[pointer2][1]) {
            pointer1++
        } else {
            pointer2++
        }
    }
    return []
};