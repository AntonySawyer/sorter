class Sorter {
  constructor() {
    this.array = [];
    this.compare = function compareNumbers(a, b) {
      return a - b;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var ar2 = [];
    indices.sort();
      for (var i = 0; i < indices.length; i++) {
        ar2.push(this.array[indices[i]]);
      }
      ar2.sort(this.compare);
      for (var j = 0; j < indices.length; j++) {
       this.array.splice(indices[j], 1, ar2[j]);
      }
    return this.array;
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;