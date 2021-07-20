export default function BetterQueue() {
  const collection = [];

  this.size = function() {
    return collection.length;
  };

  this.enqueue = function(elem) {
    collection.push(elem);
  };

  this.dequeue = function() {
    return collection.shift();
  };

  this.front = function() {
    return collection[0];
  };

  this.isEmpty = function() {
    return collection.length == 0;
  };
}
