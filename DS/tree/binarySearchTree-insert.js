var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = (value) => {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined
    } 

    let current = this.root;
    while(current){
      if(current.value === newNode.value) {
        return null
      }
      const direction = current.value > newNode.value ? 'left' : 'right'
      if(!current[direction]){
        current[direction] = newNode;
        return undefined;
      }
      current = current[direction]
    }
  }
}