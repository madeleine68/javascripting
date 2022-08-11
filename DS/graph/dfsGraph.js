function dfs(graph, root) {
    const nodes =[];  
    const stack = [];
    let current;
    let tempVNeighbors = [] 
    stack.push(root);
    while(stack.length){
      current = stack.pop();
      if(!nodes.includes(current)){
        nodes.unshift(current);
        tempVNeighbors = graph[current]
        tempVNeighbors.forEach((item, i) => item ===1 ? stack.push(i) : [])
      }  
    }
    return nodes
  }
  
  var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(dfs(exDFSGraph, 3));