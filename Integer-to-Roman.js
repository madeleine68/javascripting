/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const roman = {
    1000: "M",
    900 :"CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"
    }
    const tempArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let tempNum = num
    let n = tempArr.length -1;
    let temp ="";
    while (tempNum >= 1){
        if (tempNum < tempArr[n]){
            n -= 1;
            continue;
        } 
        tempNum -= tempArr[n];
        temp = `${temp}${roman[tempArr[n]]}`
    }
    return temp;
};