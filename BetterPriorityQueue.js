export default function BetterPriorityQueue() {
  const collection = [];

  this.size = function() {
    return collection.length();
  };

  this.enqueue = function(elem, priority) {
    if (this.isEmpty()) {
      collection.push([elem, priority]);
    } else {
      let added = false;

      for (let i = 0; i < collection.length; i++) {
        if (priority < collection[i][1]) {
          collection.splice(i, 0, [elem, priority]);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push([elem, priority]);
      }
    }
  };

  this.dequeue = function() {
    return collection.shift()[0];
  };

  this.front = function() {
    return collection[0];
  };

  this.isEmpty = function() {
    return collection.length == 0;
  };
}
