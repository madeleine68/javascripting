// O(N*Q), where N is the length of the list and Q is the number of queries
const fn = (Q) => {
    const N = Q.length;
    let S = [];
    let res = []
    S.push(0)
        for (let i = 0; i < N; i++) {
            if (Q[i][0] == 0) {
              S.push(Q[i][1])
         } else {
               for (let j = 0; j < S.length; j++) {
                  const data = S[0] ^ Q[i][1];
                    S.shift(S[j])
                    S.push(data)
                 }
            }
        }
        console.log (S.sort().join("\n"))
    }
    //effiicent way 
    // O(Q * log(Q)), where Q is the number of queries.
    const fn2 = (Q) => {
        const N = Q.length;
        
        let S = [];
        let xor = 0;
    
        for (let i = Q.length-1; i >= 0; i--) {
            if (Q[i][0] == 0) {
              S.push(Q[i][1] ^ xor)
             } else {
                xor  = xor ^ Q[i][1]
            }
        }

        S.push(xor)
       return (S.sort().join("\n"))
    }   
    const Q = [[ 0, 6 ], [ 0, 3 ],
                   [ 0, 2 ], [ 1, 4 ],
                   [ 1, 5 ]];
    
