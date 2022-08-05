const permAlone = (string) => {
    if (typeof string !== 'string') {
      throw new Error('Parameter must be a string.');
    }
  
    if (string === '') {
      throw new Error('Parameter cannot be an empty string.');
    }
  
  
    const perms = (str) => {
      const result = [];
      if (str.length < 2) return [str];
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const otherChars = str.substring(0, i) + str.substring(i + 1);
        const otherPerms = perms(otherChars);
        otherPerms.forEach(x => {
          result.push(char + x)
        });
      }
      return result;
    }
  
    const permutations = perms(string);
  
    const hasRepeat = (str) => {
      let prevChar = str[0];
      for (let i = 1; i < str.length; i++) {
        if (prevChar === str[i]) return true;
        prevChar = str[i];
      }
      return false;
    }
  
    const noRepeatPerms = [];
    for (const str of permutations) {
      if (!hasRepeat(str)) {
        noRepeatPerms.push(str);
      }
    }
  
    return noRepeatPerms.length;
}

// Heap algorithm

function permAlone(str) {
    const strArr = str.split('');

    const swap = (arr,index1, index2)=> {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
   }
  
    const output = [];
  
    const generate = (n, heapArr) => {
      if(n === 1){
          output.push(heapArr.slice().join(''));
          return;
      }
      generate(n-1, heapArr);
  
      for(let i = 0; i < n-1; i++) {
        if (n % 2 === 0){
          swap(heapArr, i , n-1)
        } else {
          swap(heapArr, 0, n-1)
        }
        generate(n-1, heapArr);
      }
    }
    generate(strArr.length, strArr.slice());
    
    const res = output.filter((str)=> !str.match(/([\s\S])\1/g)).length
    return res;
  }