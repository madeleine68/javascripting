var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.inorder = (node) => {
    //left-node-right
    let res = []
    if (!this.root) return null;
    const traverse =(node) => {
      if(!node) return []
      res.push(traverse(node.left));
      res.push(node.value)
      res.push(traverse(node.right));
      return res
    }
    return traverse(this.root)  
  }

   this.preorder = (node) => {
    //left-node-right
    let res = []
    if (!this.root) return null;
    const traverse =(node) => {
      if(!node) return []
      res.push(node.value);
      res.push(traverse(node.left));
      res.push(traverse(node.right));
      return res
    }  
    return traverse(this.root) 
  }
    this.postorder = (node) => {
    //left-node-right
    let res = []
    if (!this.root) return null;
    const traverse =(node) => {
      if(!node) return []
      res.push(traverse(node.left));
      res.push(traverse(node.right));
      res.push(node.value);
      return res
    }  
    return traverse(this.root) 
  } 
}