const pairwise = (arr, arg) => {
    const chekNum = (x) => typeof x !== 'number';

    if (!Array.isArray(arr) ){
        throw new Error ("it 's not an array")
    }

    if (chekNum(arg)) {
        throw new Error ('2nd number is not a number')
    }

    //make a copy of arr
    const list = arr.slice();
    let sum = 0;
    const array = []

    for (let i = 0; i < list.length; i++){
        const num1 = list[i];
        const num2 = arg - num1;

        const matchIndex = list.indexOf(num2);
        console.log(i, matchIndex)
        if(matchIndex !== -1 && !array.includes(matchIndex) && !array.includes(i) && i !== matchIndex) {  
            array.push(matchIndex, i)
        }
    }
   return array.reduce((sum, curr)=> sum + curr, 0 )
}

//brute force 
function pairwise(arr, arg) {
    if(!arr.length) return 0;
    let pairs = []
    for(let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++){
        // or 
        if (pairs[i] || pairs[j]|| i == j) continue
        if(arr[i]+arr[j] === arg &&
         !pairs.includes(i) &&
         !pairs.includes(j)){
            pairs.push(i,j)
        }
      }
    }
  let result=0
  pairs.forEach(i => result += i)
  return result;
  
  }

const res = pairwise([0, 0, 0, 0, 1, 1], 1);
console.log(res)