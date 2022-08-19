function solution(statues) {
    const largest = Math.max.apply(null, statues)
    const smallest = Math.min.apply(null,statues)
    const total = largest - smallest+ 1 
    const numbers = statues.length;
    return total - numbers
}
