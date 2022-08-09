var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

 this.findMin = () => {
   if(!this.root) return null;

   let current = this.root;
   while(current.left) { 
     current = current.left
   } return current.value  
 }

 this.findMax = () => {
   if(!this.root) return null;

   let current = this.root;
   while(current.right) { 
     current = current.right
   } return current.value  
 }
}