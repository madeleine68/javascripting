function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.enqueue = (elem) => {
      return collection.push(elem)
    }
    this.dequeue = () => {
      return collection.shift()
    }
    this.front = () => {
      return collection[0]
    }
    this.size = () => {
      return collection.length
    }
    this.isEmpty = () => {
      return collection.length = 0
    }
  }

  //First in First out