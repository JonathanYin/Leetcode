class RandomSet {
  constructor() {
    this.set = new Map(); // Store value and its index in the array
    this.array = []; // Store all unique values
  }

  // Insert a value into the set
  insert(value) {
    if (!this.set.has(value)) {
      this.array.push(value);
      this.set.set(value, this.array.length - 1);
      return true;
    }
    return false;
  }

  // Remove a value from the set
  remove(value) {
    if (this.set.has(value)) {
      // Get the index of the value to be removed
      const index = this.set.get(value);
      // Get the last element in the array
      const lastElement = this.array[this.array.length - 1];
      
      // Swap the last element with the element to be removed
      [this.array[index], this.array[this.array.length - 1]] = [lastElement, value];
      // Update the index of the last element in the map
      this.set.set(lastElement, index);
      
      // Remove the last element from the array and the map
      this.array.pop();
      this.set.delete(value);
      return true;
    }
    return false;
  }

  // Get a random element from the set
  getRandom() {
    if (this.array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
  }
}

// Test the class
const randomSet = new RandomSet();
console.log(randomSet.insert(5)); // Should return true
console.log(randomSet.insert(5)); // Should return false
console.log(randomSet.insert(10)); // Should return true

console.log(randomSet.getRandom()); // Should return either 5 or 10 with equal probability

console.log(randomSet.remove(5)); // Should return true
console.log(randomSet.remove(5)); // Should return false

console.log(randomSet.getRandom()); // Should return 10
