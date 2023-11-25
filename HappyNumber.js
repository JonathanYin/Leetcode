/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	// create a set to keep track of repeats
	let set = new Set();
	while (!set.has(n)) {
		// add the current number to the set
		set.add(n);

		// add the square of each digit in n
		let remainder = 0;
		let sum = 0;
		while (n) {
			remainder = n % 10;
			sum = sum + remainder * remainder;
			n = Math.floor(n / 10);
		}

		// set n to be the new sum of the squares
		n = sum;
	}

	// if n is 1, then it is a happy number
	return n === 1 ? true : false;
};
