/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(array1, m, array2, n) {
    //last index
   // let last = m + n - 1
    //3 pointers
    //merge in reverse order
//     while (m > 0 && n > 0) {
//         if (array1[m-1] > array2[n-1]){
//             array1[last] = array1[m-1]
//             m--
//         } else {
//             array1[last] = array2[n-1]
//             n--    
//         }
//         last--
//     }
    
//     //fill array1 with leftover array2 elements
//     while (n > 0) {
//         array1[last] = array2[n-1];
//         n--;
//         last-- 
//     }
    let p1 = m-1
    let p2 = n-1
    
    for (let p = m + n -1; p >= 0; p--){
        if (p2 < 0){
            break;
        }
        if(p1 >= 0 && array1[p1] > array2[p2]){
            array1[p] = array1[p1]
            p1--
        } else {
            array1[p] = array2[p2]
            p2--
        }
    }
};