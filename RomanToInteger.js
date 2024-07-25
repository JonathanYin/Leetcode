/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let i = 0;
	let count = 0;

	while (i < s.length) {
		let currVal = map[s[i]];
		let num = 0;

		// if there is a next element
		if (i < s.length - 1) {
			let nextVal = map[s[i + 1]];

			// if the next numeral is larger than the current, subtract current from next
			if (nextVal > currVal) {
				num = nextVal - currVal;
				// skip over next numeral when iterating
				i += 2;
			} else {
				num = currVal;
				i++;
			}
		} else {
			num = currVal;
			i++;
		}
		count += num;
	}

	return count;
};
