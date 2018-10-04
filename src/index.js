class Sorter {
  constructor() {
    this.array = [];
    this.compare = (a, b) => a - b;
    };

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
    let arrSort = [];
    indices.sort();
      for (let i = 0; i < indices.length; i++) {
        arrSort.push(this.array[indices[i]]);
      }
      arrSort.sort(this.compare);
      for (let j = 0; j < indices.length; j++) {
       this.array.splice(indices[j], 1, arrSort[j]);
      }
    return this.array;
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;
