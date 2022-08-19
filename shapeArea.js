function solution(n) {
    if (n ===1 ) {
        return 1;
    } else {
       return  4*(n-1) + solution(n-1)
    }
     
}
