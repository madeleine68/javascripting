function bfs(graph, root) {
    var nodesLen = {};
  
    for (let i=0; i < graph.length; i++){
      nodesLen[i] = Infinity
      }
    nodesLen[root] = 0;
  const queue = [root];
  let current;
  while(queue.length){
    current = queue.shift(); //root 3
    const layer = graph[current]; //[0, 0, 1, 0]
    const idx = [] //[2]
   layer.forEach((item, i) => item ===1 ? idx.push(i) : [])
   for (let j =0; j < idx.length ; j++){
     if (nodesLen[idx[j]] === Infinity){ // '2': Infinity
       nodesLen[idx[j]] = nodesLen[current] + 1;
        queue.push(idx[j])
     }
   }
  }
  
    return nodesLen;
  };
  
  var exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(bfs(exBFSGraph, 3));
  