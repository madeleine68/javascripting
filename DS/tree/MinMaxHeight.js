var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.findMinHeight = () => {
    if (!this.root) return -1;

      const findNodeHeight = (node) => {
      if (!node) return -1;
      if (!node.left && !node.right) return 1;

      if (!node.left){
        return findNodeHeight(node.right)+1
       }

      if (!node.right){
        return findNodeHeight(node.left)+1
      }

      return Math.min(findNodeHeight(node.left), findNodeHeight(node.right)) + 1;
      }
      return findNodeHeight(this.root) -1
    }

    this.findMaxHeight = () => {
    if (!this.root) return -1;

      const findNodeHeight = (node) => {
      if (!node) return -1;
      if (!node.left && !node.right) return 1;

      if (!node.left){
        return findNodeHeight(node.right)+1
       }

      if (!node.right){
        return findNodeHeight(node.left)+1
      }

      return Math.max(findNodeHeight(node.left), findNodeHeight(node.right)) + 1;
      }
      return findNodeHeight(this.root) -1
    }

    this.isBalanced = () => {
      return this.findMaxHeight() === this.findMinHeight()
    }
}