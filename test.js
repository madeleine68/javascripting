// // // [09:15] James Kwan (Guest)
// // //     You are given two strings s1 and s2.  Print the characters that exist in both strings in alphabetical order. 
// // // String is lowercase and characters are from a to z.   Ignore all other characters. 
// // // Input : 
// // //           s1 : this is a test
// // //           s2 : once upon a time
// // // Output : aeit

// // function commonString(s1,s2){
// //     // if s1 && S2 

// //     for(let i=0; i<s1.length; i++){
// //         for(let j=0; j<s2.length; j++){
// //             if (s1[i] === s2[j]){
// //                 return s1[i].lowercase();
// //             }
// //         } 
// //     }
// // }


// //  newConvo.latestMessageText = message.text;
// //         newConvo.unreadMessagesNumber += 1;

// //          const readMessages = useCallback(
// //     (data) => {
// //       const { conversationId } = data;

// //       const conversationsCopy = [...conversations];
// //       conversationsCopy.forEach((convo, id) => {
// //         if (convo.id === conversationId) {
// //           const convoCopy = { ...convo };
// //           const lastMessage = {
// //             ...convoCopy.messages[convoCopy.messages.length - 1],
// //             isRead: true,
// //           };
// //           convoCopy.lastReadMessage = lastMessage;
// //           conversationsCopy[id] = convoCopy;
// //         }
// //       });
// //       setConversations(conversationsCopy);
// //     },
// //     [setConversations, conversations]
// //   );

// //  // useEffect(() => {
// //   //   if (
// //   //     activeConversation === otherUser.username &&
// //   //     conversation.messages[conversation.messages.length - 1]?.senderId ===
// //   //       otherUser.id
// //   //   ) {
// //   //     socket.emit("read-message", {
// //   //       conversationId: conversation.id,
// //   //     });
// //   //   }
// //   // }, [activeConversation, otherUser, socket, conversation]);




// // A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).

// // Given an array of letters as input, write an algorithm that returns the number of consecutive subsequence palindromes in the input array.  

// // Example: [a, a, b, b, a] as input would return 8.  The possible palindromes are a, a, b, b, a, aa, bb, abba.

// function foo() {
// 	console.log( this.bar );
// }

// var bar = "A";

// //hide from above

// var obj = {bar:'B', foo: foo};
// obj.foo(); //
// var a = obj.foo
// a() // second output
