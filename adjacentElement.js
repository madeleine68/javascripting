function solution(inputArray) {
    let max = -Infinity
    for(let i = 0; i < inputArray.length-1 ; i++){
        const mult = inputArray[i]* inputArray[i+1]
        if (mult > max) max= mult
    }
    
    return max
}