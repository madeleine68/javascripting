var MaxHeap = function() {
  
    this.heap = [null];
  
    this.print = () => [...this.heap];
  
    let leftChildIndex  = (i) => 2 * i;
    let parentIndex = (i) => Math.floor(i / 2);
  
    this.insert = (item) => {
      this.heap.push(item);
      let index = this.heap.length - 1;
      while (index > 1 && item > this.heap[parentIndex(index)]) {
        this.heap[index] = this.heap[parentIndex(index)];
        this.heap[parentIndex(index)] = item;
        index = parentIndex(index);
      }
    }  

  };