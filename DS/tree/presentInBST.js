var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.isPresent = (value) => {
    let current = this.root;
    if (!this.root) return false;

    while (current && current.value != value){
      if (current.value > value){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return !!current; //??
  }
}