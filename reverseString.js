// Approach : Two pointer, In-Place, 
// Complexity Analysis
// Time complexity : O(N)  time to swap N/2 elements.
// Space complexity : O(1) 

var reverseString = function(s) {
    //check input
    if (!s || s.length < 2 || typeof s != "string") return  'NAN '
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


const reverseString2 = function(s) {
    return s.split('').reverse(),join('')
}
const reverseString3 = s => [...s].reverse().join('');

const reverseString4 = function (s){
    const backwards=[];
    for(let i = s.length - 1; i >= 0; i--){
        backwards.push(s[i])
    }
    return backwards.join('')
}
