var MinHeap = function() {
    // Only change code below this line
    this.heap = [null];
  
    // Insert
    this.insert = (element) => {
      this.heap.push(element);
  
      let heap = this.heap;
      function maxHeap(index) {
        let parent = Math.floor(index/2);
        if (element < heap[parent] && index > 1) {
          [heap[index], heap[parent]] = [heap[parent], heap[index]];
          maxHeap(parent);
        }
      }
      maxHeap(this.heap.length-1);
    }
  
    // Remove
    this.remove = () => {
      let arr = [...this.heap];
      let max = arr.splice(1, 1);
      this.heap = [null];
      for (let i = 1; i < arr.length; i++) {
        this.insert(arr[i]);
      }
      return max[0];
    }
  
    // Sort
    this.sort = (heap = this.heap) => {
      let arr = [];
      for (let i = 0; i < heap.length; i++) {
        arr.push(this.remove());
      }
      return arr;
    }
    // Only change code above this line
  };
  