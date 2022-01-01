// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Input: s = "God Ding"
// Output: "doG gniD"

var reverseWords = function(s) {
 
    let split = s.split(' ');
    for(let i = 0; i < split.length; i++) {
        split[i] = split[i].split("").reverse().join("");
    }
    return split.join(" ");

};