// const sleep = (i,ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

// async function print() {
//   for (let i = 0; i < 10; i++) {
//     await sleep(i,Math.random()*1000).then(function(result){
//         console.log(result)
//   })
//  }
// }

// print()

length = 10;
function func() {
  console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function(func) {
    func();
    arguments[0]();
  }
};

// obj.thisFunc(func, 3);


function func1(){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve("Func1")
      },1000)
    })
  }
  
  function func2(){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve("Func2")
      },2000)
    })
  }
  
  
  func1()
    .then(func2())
    .then(function(result) {
      console.log(result);
    });