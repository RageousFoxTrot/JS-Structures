export default function BetterSet() {
  const collection = [];

  this.has = function(elem) {
    return collection.indexOf(elem) !== -1;
  };

  this.values = function() {
    return collection;
  };

  this.add = function(elem) {
    if (!this.has(elem)) {
      collection.push(elem);

      return true;
    }

    return false;
  };

  this.remove = function(elem) {
    if (this.has(elem)) {
      const index = collection.indexOf(elem);
      collection.splice(index, 1);

      return true;
    }

    return false;
  };

  this.union = function(set) {
    const union = new BetterSet();
    const a = this.values(),
      b = set.values();

    a.forEach(e => union.add(e));
    b.forEach(e => {
      if (union.has(e)) return;

      union.add(e);
    });

    return union;
  };

  this.intersection = function(set) {
    const intersection = new BetterSet();

    this.values().forEach(e => {
      if (set.has(e)) {
        intersection.add(e);
      }
    });

    return intersection;
  };

  this.difference = function(set) {
    const difference = new BetterSet();

    this.values().forEach(e => {
      if (!set.has(e)) {
        difference.add(e);
      }
    });

    set.values().forEach(e => {
      if (!this.has(e) && !difference.has(e)) {
        difference.add(e);
      }
    });

    return difference;
  };

  this.subset = function(set) {
    const subset = new BetterSet();

    return set.values().every(e => this.has(e));
  };
}
