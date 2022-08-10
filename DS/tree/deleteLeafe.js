var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  
  this.remove =(value)=>{
  if (!this.root) return null;

    // find the node
    let parent;
    let target = this.root;
    while (target && target.value !== value) {
      parent = target;
      if (target.value > value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    if (!target) return null;

    if (!parent) {
      this.root = null;
    } else {
      // -- other node
      const direction = parent.left === target ? "left" : "right";
      parent[direction] = null;


    }
  }  
}