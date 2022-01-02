// 1. O(n) O(n)
var middleNode = function(head) {
    
    let A = [head];

    while (A[A.length - 1].next != null) {
         A.push(A[A.length - 1].next);
    }
    return A[Math.trunc(A.length / 2)];
};

// 2. O(n) O(1)
// When traversing the list with a pointer slow, make another pointer fast that traverses
//  twice as fast. When fast reaches the end of the list, slow must be in the middle.

var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};